import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component'
import { ContactModule} from './contact/contact.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContactModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
