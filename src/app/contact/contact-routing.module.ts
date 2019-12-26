import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path:'',
    component: ContactComponent,
    children:[
      {
        path:'add',
        component:AddComponent
      },{
        path:'search',
        component:SearchComponent
      }
    ]
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
