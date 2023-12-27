import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent {
  @Input() count: number = 0;
}
