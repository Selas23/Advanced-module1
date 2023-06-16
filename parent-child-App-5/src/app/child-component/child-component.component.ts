import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.parentFun.emit();
  }
}
