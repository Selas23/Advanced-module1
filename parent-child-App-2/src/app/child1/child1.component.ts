import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

 @Output() colors = new EventEmitter;

 send(t: { value: any; }){
   this.colors.emit(t.value);
 }
}
