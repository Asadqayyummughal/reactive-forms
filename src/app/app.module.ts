import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdFormComponent } from './td-form/td-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GreetingsPipe } from './greetings.pipe';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { HighlighgtDirective } from './highlighgt.directive';
import { LogService } from './log.service';
import { PagenotefountComponent } from './pagenotefount/pagenotefount.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import {HttpClientModule} from '@angular/common/http';
import { WalletComponent } from './wallet/wallet.component'
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TdFormComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    GreetingsPipe,
    AppSizerComponent,
    HighlighgtDirective,
    PagenotefountComponent,
    ChildAComponent,
    ChildBComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
