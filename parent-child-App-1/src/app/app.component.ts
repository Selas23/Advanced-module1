import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-App-1';
  count: number = 0;
  
  updateFromChild(count: number){
    this.count = count++;
  }
  
  reset(){
    this.count = 0;
  }
}
