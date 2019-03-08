import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() {

      console.log("constructor");

   }

   ngOnChanges(){
    
    console.log("ngOnChanges");
    
   }

   ngOnInit() {

    console.log("ngOnInit");
  }
  
   ngDoCheck()  {

    console.log("ngDocheck");
   }

   ngAfterContentInit(){

    console.log("ngAfterContentInit");
   }

   ngAfterContentChecked() {
    
    console.log("ngAfterContentChecked");

   }
  
  ngAfterViewInit(){
  
    console.log("ngAfterViewInit");
  
  }

  ngAfterViewChecked(){
  
    console.log("ngAfterViewChecked");
  
  }

  ngOnDestroy(){

    console.log("ngOnDestroy");

  }

  

}
