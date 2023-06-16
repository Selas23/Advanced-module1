import { Component, OnInit } from '@angular/core';
import { TableExample } from 'model/TableExample';
//import { TableExample } from 'src/model/TableExample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
   
  }
  tableData: TableExample[] = [];

  recievedDataFromChild(row: TableExample){
    this.tableData.push(row);
  }
}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'parent-child-App-8';
// }
