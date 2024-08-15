import { Component, Input, OnInit, Output,EventEmitter, ViewEncapsulation } from '@angular/core';
import { LogService } from '../log.service';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ActivatedRoute,Router, } from '@angular/router';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation:ViewEncapsulation.None
}) 
export class ChildComponent implements OnInit {
  @Input() childMesage:string='';
  @Output() message_to_parent=new EventEmitter();
  public today:Date=new Date();
  name="asad"
  message='Message from child';
  img_url="../../assets/flower.jpg"
  isActive=false;
    constructor(
      private sayHi:LogService,
      private render:Renderer2,
      private elem:ElementRef,
      private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.sayHi.alertMessage();
    this.render.setStyle(this.elem.nativeElement,'color','brown');
    this.today;
    console.log('chek here ...',this.route.snapshot);
    
    alert(this.route.snapshot.paramMap.get('id'))
  }
  sendMessage(){
    this.message_to_parent.emit('HELLOW PARENT(child message)')
  }

}
