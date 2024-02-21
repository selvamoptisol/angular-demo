import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() showchildtext: string = "";

  onchangeopchildName(event: string): void {
    
  }

  name: string = "hello works";

  enteredname: string = "";

  displayValue: string = "";


  onchangeEnteredname() {
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
