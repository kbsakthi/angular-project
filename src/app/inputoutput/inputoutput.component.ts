import { Component, OnInit , Output} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {
   
  public CData: number;
   
  
  constructor() { }

  ngOnInit() {
    
    }
    
 
}
