import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.css']
})
export class AppSizerComponent implements OnInit {
 @Input() size:number=0;
 @Output() sizeChange=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  inc(){
    this.resize(+1)
  }
  dec(){
   this.resize(-1)
  }
  resize(par:number){
   this.size= Math.min(40,Math.max(8,+this.size+par))
    this.sizeChange.emit(this.size)
  }

}
