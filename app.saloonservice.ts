import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Saloon } from './app.saloon';
//import {SaloonService} from './app.saloonservice';
@Injectable({
    providedIn:'root'
})
export class SaloonService{
constructor(private http:HttpClient){}


addsaloon(sall:any){
    console.log(sall);
    let input=new FormData();
    input.append("id",sall.id);
    input.append("name",sall.name);
    input.append("price",sall.phoneNumber);
    input.append("address.id",sall.addressid);
    input.append("address.city",sall.addresscity);
    input.append("address.state",sall.addresstate);
    input.append("address.postalcode",sall.addresspostalcode);
    input.append("customers",sall.customers);
    // input.append("customer.id",sall.customerid);
    // input.append("customer.name",sall.customername);
    // input.append("customer.email",sall.customeremail);
    // input.append("customer.mobileNumber",sall.customermobileNumber);

    return this.http.post("http://localhost:9098/saloon/add",input);
}
searchSaloon(sal:any){
    console.log(sal);
    //return this.http.get("http://localhost:9098/saloon/search?name=",{params:{sal}});
    return this.http.get("http://localhost:9098/saloon/search?name="+sal)

}
}