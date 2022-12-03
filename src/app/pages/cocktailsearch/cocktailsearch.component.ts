import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cocktailsearch',
  templateUrl: './cocktailsearch.component.html',
  styleUrls: ['./cocktailsearch.component.css']
})
export class CocktailsearchComponent implements OnInit {
scocktail=""
cocktails:any
  constructor() { }

  ngOnInit(): void {
  }
  searchCocktail(search: any)
{
axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search)
.then(
  Response=>{
    this.cocktails=Response.data.drinks
    console.log(this.cocktails)
  }
)
.catch(
  err=>{
    console.log(err)
  }
)
}
}
