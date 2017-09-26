import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-section',
  templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

  constructor(
  ) { 
  }

  ngOnInit() { }

  saveUser(): void {
    /**
     * Call save method from UserService
     */
  }
}