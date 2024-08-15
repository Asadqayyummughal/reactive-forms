import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
 testform=this.fb.group(
  {
    name:['',[Validators.required,Validators.minLength(5)]]
  }
 )
  constructor(private fb:FormBuilder) { 
    // this.testform=new FormGroup(
    //   {
    //     name:new FormControl('',[Validators.required,Validators.minLength(5)])
    //   }
    // )
   
  }
  ngOnInit(): void {
  }
  get name(){
    return this.testform.get('name');
  }

}
