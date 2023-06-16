import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jop-list',
  templateUrl: './jop-list.component.html',
  styleUrls: ['./jop-list.component.css']
})
export class JopListComponent implements OnInit{
  @Input()  data: any;
  @Input()  mode: any;

  constructor() { }

  ngOnInit() {
  }

}
