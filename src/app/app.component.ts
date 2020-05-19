import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  Users:any[]=[
    {id:'1',usrname:'parisafro'},
    {id:'2',usrname:'parro'},
    {id:'3',usrname:'safro'},
    {id:'4',usrname:'parisa'}
  ];
}
