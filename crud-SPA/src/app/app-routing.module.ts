import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'retrieve',component:RetrieveComponent},
  {path:'update',component:UpdateComponent},
  {path:'update/:productid',component:UpdateComponent},
  //{path:'',component:RetrieveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




