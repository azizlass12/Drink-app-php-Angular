import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktaillist',
  templateUrl: './cocktaillist.component.html',
  styleUrls: ['./cocktaillist.component.css']
})
export class CocktaillistComponent implements OnInit {
  nomc: any;
  dataArray:any;

  constructor(private route:ActivatedRoute,private router:Router) { 

  }

  ngOnInit(): void {
        console.log(this.route.snapshot.params.nomc) 
        this.nomc=this.route.snapshot.params.nomc;
this.getCocktailById()
  }
getCocktailById()
{
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+this.nomc)
  .then(Response=>{
    console.log(Response.data)
    this.dataArray=Response.data.drinks
    }
  ).catch(
    err=>{
      console.log(err)
    }
  )
}
getid(idDrink:any,i:any)
{
  this.router.navigate(['/cocktails/details/'+idDrink])
}
}
