import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

  constructor(private service:HelperService) { }

  ngOnInit(): void {
    this.callServiceMethod();
  }
  callServiceMethod(){
    this.service.getData().subscribe(
      (data:any)=>{
        console.log('checkout data.....>',data);
      }
    ),
    (error:any)=>{
      console.log('checkout error in accessing data',error);
      
    }

  }

}
