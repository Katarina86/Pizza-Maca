import { Component, OnInit } from '@angular/core';
import { PizzaService } from './service/pizza.service';
import { Pizza } from './model/pizza';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'pm-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  cart: Pizza[] = [];
  total: number = 0;

  params = {
    filter: {
      discount: "",
      vegetarian: ""
    }
  }

  constructor(private pizzaService: PizzaService, private modalService: NgbModal) {
    console.log(this.cart)
   }

  ngOnInit() {
   this.refreshPizza();
    
  }

  refreshPizza(){
    
    this.pizzaService.getPizza(this.params).subscribe(
      data => this.pizzas = data.results
    )
  }

 

  open() {
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.cart = this.cart;
    modalRef.result.then(result => {
      if(result == 'close'){
        this.cart = [];
      }
      else if(result == 'addMore'){
        this.params.filter.discount = 'true';
      }
    })
  
  }

  CartIn(pizza: Pizza){
    
    this.cart.push(pizza);
    this.total = 0;
    this.cart.map(el =>this.total += el.price)
    
}

}
