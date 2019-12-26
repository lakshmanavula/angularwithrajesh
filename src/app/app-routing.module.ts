import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserComponent,

  },
  {
    path:'table',
    component:TableComponent
  },
  
  {
    path:'contact',
    loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path:'news',
    loadChildren:() => import('./news/news.module').then(m=>m.NewsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
