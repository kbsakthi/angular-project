import { Component, OnInit,Input,SimpleChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  @Input() appName:string;

  constructor() { 

   this.appName ="binding";

  }

  ngOnInit() {

    console.log(this.appName);
  }

  ngDocheck(){
    
    console.log("do check called",this.appName);
  }
  num=0;


increment() {
  this.num++;
  console.log(this.num)
}

}