import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  hasErrors: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = ContactComponent.createLoginForm(this.formBuilder);
  }

  static createLoginForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      'question': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'message': ['']
    });
  }

  static validateContactForm(contactForm: FormGroup): boolean {
    return contactForm.valid;
  }

  submitForm(contact: any): any {
    console.log(contact);
    this.hasErrors = !ContactComponent.validateContactForm(this.contactForm);
    if (this.hasErrors) {
      return;
    }
  }

  ngOnInit() { }
}
