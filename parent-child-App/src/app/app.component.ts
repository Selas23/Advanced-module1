import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-App';
  enterName="Selas";
  parentData="";
  enterAge=23;
  parentData1=0;


  transferData(){
    this.parentData=this.enterName;
  }
  transferData1(){
    this.parentData1=this.enterAge;
  }


  // transferData3(){
    
  // }

  value="";
  sendData(value: string){
    this.value = value;
  }

}
