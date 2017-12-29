import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-unauthorized-snack-bar',
  template: `
    <div fxLayout="column" fxLayoutAlign="center">
      <mat-list fxFlex>
        <mat-list-item>
          <h4 mat-line>Attempt to access: <i><u>localhost:4200{{data.url}}</u></i>.</h4>
        </mat-list-item>
        <mat-list-item>
          <h4 mat-line>Access Denied!</h4>
          <button mat-raised-button color="warn" (click)="dismiss()">Ok</button>
        </mat-list-item>
      </mat-list>
    </div>
  `,
  styles: [`
    .mat-list .mat-list-item .mat-line {
      white-space: initial !important;
    }
  `]
})
export class UnauthorizedSnackBarComponent {
  public snackBarRef: any;
  private contentSection: HTMLElement;

  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any) {
    this.contentSection = document.getElementById('content');
    this.contentSection.style.pointerEvents = 'none';
  }

  dismiss() {
    this.snackBarRef.dismiss();
    this.contentSection.style.pointerEvents = '';
  }

}
