import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { CocktaildetailsComponent } from './pages/cocktaildetails/cocktaildetails.component';
import { CocktaillistComponent } from './pages/cocktaillist/cocktaillist.component';
import { CocktailsearchComponent } from './pages/cocktailsearch/cocktailsearch.component';

const routes: Routes = [
  {path:'categories',component:CategorieComponent},
  {path:'categorie/cocktails/:nomc',component:CocktaillistComponent},
  {path:'cocktails/details/:idDrink',component:CocktaildetailsComponent},
  {path:'categorie/search',component:CocktailsearchComponent},
  {path:'',redirectTo:'categories',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
