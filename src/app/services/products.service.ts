import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from './../models/product.model'; // Make sure this path is correct

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private db: AngularFireDatabase) {}

  // Get all products from Firebase database
  getAllProducts(): Observable<IProduct[]> {
    return this.db
      .list('products')  // Reference to the 'products' node in the Firebase database
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => {
            // Get the product data from the payload
            const productData = c.payload.val() as IProduct;

            // Make sure to include all necessary fields for the IProduct interface
            const product: IProduct = {
              key: c.payload.key,   // Firebase key (can be useful for updates)
              id: productData.id,   // Ensure these fields match your IProduct interface
              title: productData.title,
              description: productData.description,
              price: productData.price,
              image: productData.image,
              items: productData.items,
              quantity: productData.quantity
            };

            return product;
          })
        )
      );
  }
}

