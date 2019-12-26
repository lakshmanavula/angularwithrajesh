import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent,
    SearchComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule

  ]
})
export class ContactModule { }
