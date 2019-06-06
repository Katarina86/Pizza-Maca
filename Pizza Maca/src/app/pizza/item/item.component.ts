import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../model/pizza';

@Component({
  selector: 'pm-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Output() emitPizza: EventEmitter<object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  KupiPizzu(){
    this.emitPizza.emit(this.pizza);
  }
}
