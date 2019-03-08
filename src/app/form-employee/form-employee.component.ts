import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
 employeeForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName : new FormControl(),
      email : new FormControl()

    });
  }

  onSubmit(): void{
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.touched);
  }

}
