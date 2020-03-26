import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { RegistrationService } from '../service/registration.service';
import { CustomValidator } from '../custom-validator/custom.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required)
    }, { validators: [CustomValidator.validatePassword], updateOn: 'blur' });
  }

  register() {
    this.registrationService.register(this.registrationForm.value).subscribe((result) => {
      if (result.status === 'success') {
        this.snackbar.open('Registration successful, please login to access your account', 'Register', {
          duration: 1000
        });
      }
    });
  }

}
