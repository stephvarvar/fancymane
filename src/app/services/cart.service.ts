import { Injectable } from '@angular/core';

import { IProduct } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart: IProduct[] = [];
  private cartSubject = new BehaviorSubject<IProduct[]>(this.loadCartFromLocalStorage());

  cart$ = this.cartSubject.asObservable();

  private loadCartFromLocalStorage(): IProduct[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  private saveCartToLocalStorage(cart: IProduct[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartItems() {
    return this.cartSubject.getValue();
  }

  addToCart(product: IProduct): void {
    const currentCart = this.getCartItems();

    // Check if the product is already in the cart
    const existingProduct = currentCart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity if already in the cart
    } else {
      // Initialize the product with quantity 1 if new
      this.cartSubject.next([...currentCart, { ...product, quantity: 1 }]);
      this.saveCartToLocalStorage(currentCart);
    }
  }

  updateItemQuantity(index: number, quantity: number) {
    const currentCart = this.getCartItems();
    if (quantity < 1) {
      return; // Don't allow quantity less than 1
    }
    currentCart[index].quantity = quantity;
    this.cartSubject.next([...currentCart]);
    this.saveCartToLocalStorage(currentCart);

  }

  updateCart(updatedCart: IProduct[]): void {
    this.cartSubject.next([...updatedCart]);
    this.saveCartToLocalStorage(updatedCart);

  }

  getCart(): IProduct[] {
    return this.cart;
  }

  removeItem(index: number) {
    const currentCart = this.getCartItems();
    currentCart.splice(index, 1);
    this.cartSubject.next([...currentCart]);
    this.saveCartToLocalStorage(currentCart);

  }

  getTotal() {
    const currentCart = this.getCartItems();
    return currentCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

}
