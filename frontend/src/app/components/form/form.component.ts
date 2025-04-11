import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  myForm!: FormGroup;
  ngOnInit(){
    this.myForm = new FormGroup({
      'username': new FormControl('', {
        validators:[Validators.required, Validators.minLength(3)]
      }),
      'name': new FormControl('', {
        validators:[Validators.required, Validators.minLength(3)]
      }),
      'email': new FormControl('', {
        validators:[Validators.required, Validators.email]
      }),
      'phone': new FormControl('', {
        validators:[Validators.required, Validators.minLength(10)]
      }),
      'password': new FormControl('', {
        validators:[Validators.required, Validators.minLength(3)]
      }),
      'confirmPassword': new FormControl('', {
        validators:[Validators.required, Validators.minLength(3)]
      }),
    })
  }
}
