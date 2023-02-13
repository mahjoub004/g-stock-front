import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent] // point d'enter de l'application
})
export class AppModule { }
