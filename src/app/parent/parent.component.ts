import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { AfterViewInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit{
  @ViewChild(ChildComponent) child:any;
  isSpecial:boolean=true;
  currentClasses:object={};
  curentStyles:object={};
  today:string='';
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public employes:Array<Iemploye>=[{name:'',ph:''}]

  constructor() { 
    this.employes=[
      {name:'asad',ph:'9827349834'},
      {name:'suleman',ph:'9827349834'},
      {name:'Hassan',ph:'9827349834'}
    ]
    
  }
 
  

  ngOnInit(): void {
    this.setCurrentClases();
    this.setStyles();
    this.today= this.getDay(new Date());
    
    
  }
  receiveMessage(msg:any){
   prompt('message from child',msg)
  }
  ngAfterViewInit(): void {
    alert(this.child.message)
  }
  setCurrentClases(){
    this.currentClasses={
      savabel:true,
      modefied:true,
      changeable:true
    }
  }
  setStyles(){
    this.curentStyles={
      border:'2px solid black',
      FontFace:'blur',
      color:'yellow',
      backgroundColor:'black',
      width:'300px',
      height:'200px'

    }
  }
  getDay(date:Date):string{
     let dayNo=date.getDay();
     let dayname=this.days[dayNo];
     return dayname;
  }

}
interface Iemploye{
  name:string,
  ph:string,
}
