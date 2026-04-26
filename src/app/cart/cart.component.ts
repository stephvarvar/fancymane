import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: IProduct[] = []; 
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Subscribe to the cart observable to get updates
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  // Get the total price of the cart
  getTotal(): number {
    return this.cartService.getTotal();
  }

  // Update item quantity in the cart
  updateItemQuantity(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const newQuantity = Number(input.value);

    if (newQuantity > 0) {
      this.cartItems[index].quantity = newQuantity;
      this.cartService.updateCart(this.cartItems); // Sync updated cart
      this.updateTotal();
    } else {
      alert('Quantity must be at least 1.');
    }
  }

  updateTotal(): void {
    this.total = this.cartService.getTotal();
  }
  // Remove item from cart
  removeItem(index: number): void {
    this.cartService.removeItem(index);
  }
}