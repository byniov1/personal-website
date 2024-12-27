import { Component } from '@angular/core';
import { CommonsModule } from '../common/common.module';

@Component({
  selector: 'app-about',
  imports: [CommonsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {}
