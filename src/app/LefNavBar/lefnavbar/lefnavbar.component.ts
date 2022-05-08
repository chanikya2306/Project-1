import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lefnavbar',
  templateUrl: './lefnavbar.component.html',
  styleUrls: ['./lefnavbar.component.scss']
})
export class LefnavbarComponent implements OnInit {
  user:any;
  userValue:any;
  lisOfIcecreams:any;
  menuofitems:any;
  addingitem:any = [];
  constructor() { 
   
  }

  ngOnInit(): void {
  }
  customername(event:any){
    this.userValue = this.user
  }
  addmenu(menu:any){
    this.menuofitems = this.lisOfIcecreams;
    this.addingitem.push(this.menuofitems);
    console.log(this.addingitem)
  }
}