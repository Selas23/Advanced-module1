import { Component, EventEmitter, Output } from '@angular/core';
import { TableExample } from 'model/TableExample';
//import { TableExample } from 'src/model/TableExample';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  newRow: TableExample = {
    id: 0,
    name: '',
    age: 0,
    gender: ''
  }

  @Output() dataAdded: EventEmitter<TableExample> = new EventEmitter<TableExample>();
  
  addRow(){
    
   
    this.dataAdded.emit(this.newRow);
    this.newRow ={
      id: 0,
      name: '',
      age: 0,
      gender: ''
    };
}

}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.css']
// })
// export class ChildComponent {

// }
