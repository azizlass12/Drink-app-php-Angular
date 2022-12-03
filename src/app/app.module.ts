import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { CocktaillistComponent } from './pages/cocktaillist/cocktaillist.component';
import { CocktaildetailsComponent } from './pages/cocktaildetails/cocktaildetails.component';
import { CocktailsearchComponent } from './pages/cocktailsearch/cocktailsearch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategorieComponent,
    CocktaillistComponent,
    CocktaildetailsComponent,
    CocktailsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
