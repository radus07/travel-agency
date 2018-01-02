import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import {MyAccountService} from '../../../../service/myAccount.service';

@Component({
  selector: 'app-unauthorized-snack-bar',
  template: `
    <div fxLayout="column" fxLayoutAlign="center">
      <mat-list fxFlex>
        <mat-list-item>
          <h4 *ngIf="data.errorCode === 401.3" mat-line>Attempt to access: <i><u>localhost:4200{{data.url}}</u></i>.</h4>
          <h4 *ngIf="data.errorCode === 401" mat-line>Unauthorized.</h4>
        </mat-list-item>
        <mat-list-item>
          <h4 *ngIf="data.errorCode === 401.3" mat-line>Access Denied!</h4>
          <h4 *ngIf="data.errorCode === 401" mat-line>Invalid token!</h4>
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

  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any,
              private myAccountService: MyAccountService) {
    this.contentSection = document.getElementById('content');
    this.contentSection.style.pointerEvents = 'none';
  }

  dismiss() {
    if (this.data.errorCode === 401) {
      this.myAccountService.logoutAccount();
    }
    this.snackBarRef.dismiss();
    this.contentSection.style.pointerEvents = '';
  }

}
