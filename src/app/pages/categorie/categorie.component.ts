import { Component, OnInit } from '@angular/core';
import axios, { Axios } from 'axios';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
  styles: [`
  .class1{color:red;  }

  
  `


  ]
})
export class CategorieComponent implements OnInit {
  categories:any
  h1: any;

  constructor() { }

  ngOnInit(): void {
    this.getcategories()
  }
getcategories(){ //consommation api
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
  .then(Response=>{
    this.categories=Response.data.drinks
    console.log(this.categories)

  })
  .catch(err=>{
    console.log(err)
  })
}
validateCategorie (categories:any){
if (categories.indexOf("/")==-1){
return true;
}else
{return false;}

}

}
