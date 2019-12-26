import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = "Ticketing System";
  message = "Raise an issue with us we are more than happy to help u";
  imageLocation = "http://mxtrianz.me/wp-content/uploads/2017/05/small-pictures-1-small.jpg"

  constructor(){
   
  }
  ngOnInit() {
  }

  saveData(){
      console.log("Data about save is :"+this.message);
  }
  checkData(){
     return this.message.length == 0;
  }

  showImage(age){
   
    if(age > 18){
      this.imageLocation = "http://mxtrianz.me/wp-content/uploads/2017/05/small-pictures-15-office-space-rentals-for-business-in-ottawa.jpg"
    }else{
      this.imageLocation = "http://mxtrianz.me/wp-content/uploads/2017/05/small-pictures-11-small-but-mighty-everyday-glucose-will-fit-in-your-wallet.jpg"
    }
  }

  register(f){
    console.log(f.name.value);
    console.log(f.age.value);
  }
  
 

  

}
