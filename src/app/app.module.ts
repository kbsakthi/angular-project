import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {ReactiveFormsModule} from '@angular/forms';

import { ServicedemoService } from './servicedemo.service'

import { BindingComponent } from './binding/binding.component';
import { HooksComponent } from './hooks/hooks.component';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { TiptoolComponent } from './tiptool/tiptool.component';
import { ChildComponent } from './child/child.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { DirectivedemoDirective } from './directivedemo.directive';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { InjectibleComponent } from './injectible/injectible.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HooksComponent,
    InputoutputComponent,
    TiptoolComponent,
    ChildComponent,
    PipesdemoComponent,
    DirectivedemoDirective,
    DirectivecompComponent,
    FormEmployeeComponent,
    InjectibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    TooltipModule.forRoot()

  ],
  providers: [ServicedemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
