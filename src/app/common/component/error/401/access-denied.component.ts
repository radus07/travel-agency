import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'access-denied',
  templateUrl: './access-denied.component.html'
})

export class AccessDeniedComponent implements OnInit {
  title = "No permissions!";
  
  constructor() { }

  ngOnInit() { }
}