import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {FormArray} from'@angular/forms';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit,OnDestroy{
  private sub_interval:any;
  profileForm = this.fb.group({
    firstName: ['' ,Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')])
  });
  
  constructor(private fb:FormBuilder) { }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
    
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  
  }

  ngOnInit(): void {
    console.log('component is goint to be initilized');
    
    // this.sub_interval=setInterval(() => {
    //   console.log('Hellow Asad');
      
    // },1000);
  }
 
 
  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  // }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  ngOnDestroy(): void{
    console.log('component has been destroyed');
    alert('reactive form destroyed')
    
  
}


}
