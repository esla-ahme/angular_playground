import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starter_app';
  pressCount: number = 0;
  increaseCount() {
    this.pressCount++;
  }
}
