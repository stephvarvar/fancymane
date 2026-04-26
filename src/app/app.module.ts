import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.development';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FaqsComponent } from './faqs/faqs.component';

import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    IngredientsComponent,
    GalleryComponent,
    AboutComponent,
    ProductsComponent,
    FaqsComponent,
    NavComponent,

    HeaderComponent,

    StoreComponent,
    CartComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
