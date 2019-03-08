import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from 'src/app/binding/binding.component';
import { HooksComponent } from 'src/app/hooks/hooks.component';
import { InputoutputComponent } from 'src/app/inputoutput/inputoutput.component';
import { TiptoolComponent } from 'src/app/tiptool/tiptool.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { InjectibleComponent } from './injectible/injectible.component';


const routes: Routes = [
  {path:'Binding', component: BindingComponent},
  {path:'Hooks',component: HooksComponent},
  {path:'InputOutput',component : InputoutputComponent},
  {path:'Tooltip',component : TiptoolComponent},
  {path:'Pipesdemo',component: PipesdemoComponent},
  {path:'Directivecomp', component:DirectivecompComponent},
  {path:'FormEmployee', component:FormEmployeeComponent},
  {path:'Injectible', component:InjectibleComponent},

  {path:'', redirectTo : '/Binding', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
