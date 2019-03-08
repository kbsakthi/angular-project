import { Component, OnInit } from '@angular/core';
import { ServicedemoService } from '../servicedemo.service'

@Component({
  selector: 'app-injectible',
  templateUrl: './injectible.component.html',
  styleUrls: ['./injectible.component.css'],
  providers:[ServicedemoService]
})
export class InjectibleComponent implements OnInit {

  constructor(private Servicedemo: ServicedemoService) { }
  
  ngOnInit() {
    this.Servicedemo.display();
  }

}
