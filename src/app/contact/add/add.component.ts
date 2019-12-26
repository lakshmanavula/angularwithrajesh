import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user:string;
  users = []
  constructor() { }

  ngOnInit() {
  }

  addUser(){
    this.users.push(this.user);
    this.user = "";
  }



}
