import { 
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child component</h2>
    current count is {{ _count }}
  `
})
export class ChildComponent {
  //@Input() count: number;

  _count: number = 0;

  @Input()
  set count(count: number) {
    this._count = count;
    console.log(count);
  }


  // ngOnChanges(changes: SimpleChanges) {
  //   for (let property in changes) {
  //     if (property == 'count') {
  //       console.log('Previous: ', changes[property].previousValue);
  //       console.log('Current: ', changes[property].currentValue);
  //       console.log('firstChange: ', changes[property].firstChange)
  //     }
  //   }
  // }
}










// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.css']
// })
// export class ChildComponent {

// }
