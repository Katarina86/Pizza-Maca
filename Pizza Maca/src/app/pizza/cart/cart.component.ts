import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../model/pizza';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../service/pizza.service';
import { Order } from '../model/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Pizza[];
  total: number = 0;
  formOrder: FormGroup;
  order: Order = {
    _id: null,
    dataForm: {},
    listOrder: [],
    total: null
  };
  

  constructor(private fb: FormBuilder, private pizzaServis: PizzaService, public activeModal: NgbActiveModal) {
    this.formOrder = this.fb.group({
      'address': ["", Validators.required],
      'appartment' : ["", Validators.required],
      'telephone': ["", Validators.required]
   })
  }

 

  ngOnInit() {
     
      this.cart.map(el => this.total += el.price);
  
  }

  onSubmit(){
   let orderList: string[] = this.cart.map(el => el.name);
   this.order.dataForm = this.formOrder.value;
   this.order.listOrder = orderList;
   this.order.total = this.total;
   this.pizzaServis.addOrder(this.order).subscribe(
     data => {this.activeModal.close('close');}
   )
  }

  addMore(){
    this.activeModal.close('addMore');
  }

}
