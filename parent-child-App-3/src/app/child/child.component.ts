import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() PData: string | undefined;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(value: any) {
    this.childEvent.emit(value);
  }
}
