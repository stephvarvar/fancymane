import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent}, 
  { path: 'products', component: ProductsComponent},
  { path: 'faqs', component: FaqsComponent},
  { path: 'cart', component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
