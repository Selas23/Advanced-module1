import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  constructor() { }

  ngOnInit() {
  }

  parentFun(){
    alert("parent component function.");
  }
}
