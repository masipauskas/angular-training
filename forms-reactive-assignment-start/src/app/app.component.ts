import { Component } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Rx";
import {ValidationErrors} from "@angular/forms/src/directives/validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectForm: FormGroup;
  status = [
    'Stable', 'Critical', 'Finished'
  ];

  constructor(private fb: FormBuilder) {
    this.projectForm = fb.group({
      "projectName": ['', Validators.composeAsync([projectValidator()])],
      "email": ['', Validators.compose([Validators.required, Validators.email])],
      "status": ['', Validators.required ]
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}

function projectValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return (control.value == '' || control.value == "Test") ? Observable.of("Error") : Observable.of(null);
  };
}
