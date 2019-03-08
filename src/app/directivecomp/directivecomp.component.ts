import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  templateUrl: './directivecomp.component.html',
  styleUrls: ['./directivecomp.component.css']
})
export class DirectivecompComponent implements OnInit {

    status=false;
    age=50;

  constructor() { }

  ngOnInit() {

    if(this.age < 40){
      this.status=true;
    }
  }

}
