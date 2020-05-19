import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parisa',
  templateUrl: './parisa.component.html',
  styleUrls: ['./parisa.component.css']
})
export class ParisaComponent {
  print:0
    Users:any[]=[
    {username:'pari',id:'1'},
    {username:'parifro',id:'2'},
    {username:'parisa',id:'3'},
    {username:'parisa',id:'3'}

  ];
  show='';
  showdata(show){
    alert(show);
  }



}