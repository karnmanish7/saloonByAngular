import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { SaloonService } from './app.saloonservice';
@Component({
    selector:'search-sal',
    templateUrl:'searchsaloon.html'
})
export class SearchSaloon{
    vendorName: string;
    cityName: string;
    saloonName:string="";
    constructor(private router:Router,private saloonService:SaloonService) { }
  
    ngOnInit() {
    }
  
    searchSaloonName() {
      // console.log(this.vendorName);
      this.saloonService.searchSaloon(this.saloonName).subscribe(response =>
        console.log(JSON.stringify(response))
      );
      //this.router.navigate(['/home/saloon/' + this.saloonName]);
    }
  

}