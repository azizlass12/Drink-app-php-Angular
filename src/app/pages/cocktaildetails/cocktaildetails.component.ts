import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktaildetails',
  templateUrl: './cocktaildetails.component.html',
  styleUrls: ['./cocktaildetails.component.css']
})
export class CocktaildetailsComponent implements OnInit {
  idDrink: any;
  ingDrink: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.idDrink)
    this.idDrink=this.route.snapshot.params.idDrink;
    this.getCocktailById()
  }
getCocktailById()
// {
//   axios.get("www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+this.idDrink).then
//   (Response=>{
//     console.log(Response)
//   })
// }
{
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+this.idDrink)
  .then(Response=>{
    console.log(Response.data)
    this.ingDrink=Response.data.drinks
    }
  ).catch(
    err=>{
      console.log(err)
    }
  )
}
}
