import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MESSAGES } from '../app.component';

@Component({
  selector: 'user-list',
  templateUrl: './agency.component.html'
})
export class AgencyComponent {
  messages = MESSAGES.Agency;
}
