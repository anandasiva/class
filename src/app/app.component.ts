import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string='class';
  cssVar:string="primary big";
  cssArray=["primary","big"];
  cssClass={
    primary:true,
    big:true,
  };
  flag:boolean =true;
  numbers=[30,40,50,60,70,80];
  constructor(){}

  ngOnInit(){}
   

  getClass(num:number=0) {
    if (num <= 50) return 'primary';
    else return 'secondary';
  }
  }


