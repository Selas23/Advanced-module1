import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ChildComponentComponent } from './child-component/child-component.component';
//import { ParentComponentComponent } from './parent-component/parent-component.component';
import { JopListComponent } from './jop-list/jop-list.component';
import { ParentItemComponent } from './jop-list/parent-item/parent-item.component';
import { ChildItemComponent } from './jop-list/child-item/child-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    //ChildComponentComponent,
    //ParentComponentComponent,
    JopListComponent,
    ParentItemComponent,
    ChildItemComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
