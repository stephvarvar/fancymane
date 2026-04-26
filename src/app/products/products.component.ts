import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];

constructor(
  private serviceProducts: ProductsService,
  private cartService: CartService
) {}

ngOnInit() {
  this.serviceProducts.getAllProducts().subscribe((products) => {
    this.products = products;
  })
} 

addToCart(product: IProduct): void {
  this.cartService.addToCart(product);
  console.log('Product added to cart:', product);
}

}
