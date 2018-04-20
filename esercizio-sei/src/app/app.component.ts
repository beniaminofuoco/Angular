import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultLevel= 'advanced';
  submitted = false;

  dati = {
    email: '',
    password: '',
    level: ''
  };

  onSubmit() {
    this.submitted = true;

    this.dati.email = this.form.value.email;
    this.dati.password = this.form.value.password;
    this.dati.level = this.form.value.level;

    this.form.reset();
  }
}
