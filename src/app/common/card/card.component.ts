import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
})
export class CardComponent {
  public readonly imgSrc = input<string>('angular-feature-image-1-min.png');
  public readonly text = input<string>('skill');
}
