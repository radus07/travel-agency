import { Directive, Input, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Directive({
  selector: '[protected]'
})
export class ProtectedDirective implements OnInit {

  @Input('roles') roles: string;

  constructor(
    private router: Router,
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    let parentNode: HTMLElement = this.el.nativeElement.parentNode;
    if (this.roles !== undefined) {
      // if (!this.hasPermissions(this.userService.getUser(), this.roles.split("|"))) {
      //   parentNode.removeChild(this.el.nativeElement);
      // }
    }    
  }

  // private hasPermissions(user: User, roles: string[]): boolean {
  //   for (let i = 0; i < roles.length; i++) {
  //     if (user.role.name.toLowerCase() === roles[i].toLowerCase()) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
 
}