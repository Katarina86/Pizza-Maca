import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from '../model/pizza';
import { PizzaList } from '../model/pizzaList';
import { Order } from '../model/order';

const baseUrl =  "http://localhost:3000/api/pizzas";


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizza(params?: any): Observable<PizzaList> {
    let queryParams = {}
    if(params){
      queryParams = {
        params: new HttpParams()
        .set('vegetarian', params.filter.vegetarian && params.filter.vegetarian.toString()  || '')
        .set('discount', params.filter.discount && params.filter.discount.toString()  || '')
      }
    }
    return this.http.get(baseUrl, queryParams).pipe(map(res => new PizzaList(res)))
  }

  //http://localhost:3000/api/orders

 addOrder(order: Order): Observable<Order>{
   return this.http.post("http://localhost:3000/api/orders", order).pipe(map(
     response => new Order(response)
   ))
 }

 
}
