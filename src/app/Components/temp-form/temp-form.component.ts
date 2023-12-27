import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrl: './temp-form.component.scss',
})
export class TempFormComponent {
  user: {
    fullname: string;
    email: string;
    password: string;
    birthdate: string;
  } = {
    fullname: '',
    email: '',
    password: '',
    birthdate: '',
  };

  data: any = {};
  @Output() increasCount: EventEmitter<any> = new EventEmitter();
  register() {
    this.data = { ...this.user };
    console.log(this.user);
    this.increasCount.emit();
  }
}
