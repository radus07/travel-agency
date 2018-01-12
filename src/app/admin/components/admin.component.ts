import {Component} from '@angular/core';

@Component({
  selector: 'app-admin-section',
  template: `
    <app-toolbar [sidenav]="sidenav"></app-toolbar>

    <mat-sidenav-container>

      <mat-sidenav #sidenav mode="side">
        <app-side-nav></app-side-nav>
      </mat-sidenav>

      <mat-sidenav-content>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>

    </mat-sidenav-container>

    <app-footer></app-footer>
  `,
  styles: [`
    .mat-drawer-container {
      height: calc(100% - 80px);
    }
    .container {
      width: 100%;
      height: 100%;
    }
  `]
})
export class AdminComponent {

  constructor() {
  }
}
