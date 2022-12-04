import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.getFormData.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() getFormData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
