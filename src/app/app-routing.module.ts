import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './parent/parent.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { ChildComponent } from './child/child.component';
import { PagenotefountComponent } from './pagenotefount/pagenotefount.component';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';



const routes: Routes = [
  {
    path:'r_form',
    component:ReactiveFormComponent
  },
  {
    path:'child/:id',
    component:ChildComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  // {
  //   path:'parent',
  //   component:ParentComponent 
  // }
  
  {
    path:'app-sizer',
    component:AppSizerComponent,
    children:[
      {
        path:'childA',
        component:ChildAComponent
      },
      {
        path:'childb',
        component:ChildBComponent
      },
    ]
  },
  {
    path:'',
    component:ParentComponent 
  }
  ,{
    path:'**',
    component:PagenotefountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
