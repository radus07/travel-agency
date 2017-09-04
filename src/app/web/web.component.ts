import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MESSAGES } from '../app.component';

@Component({
  selector: 'user-list',
  templateUrl: './web.component.html'
})
export class WebComponent {
  messages = MESSAGES.Web;
  isLogged = false;

  logout(): void {
    this.isLogged = false;
  }

  login(): void {
    this.isLogged = true;
  }
}
