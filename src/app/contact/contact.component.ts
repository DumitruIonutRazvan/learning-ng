import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() {}

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email])

  })

  ngOninit(): void {}


  
  

  submitForm() {

    console.log(this.contactForm.valid)
  //   if (this.senderEmailControl.dirty) {
  //     alert('you changed the text')
  //   }
   }  
}
