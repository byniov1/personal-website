import { Component } from '@angular/core';
import { CommonsModule } from '../common/common.module';
import { FirstSectionComponent } from './first-section/first-section.component';

@Component({
  selector: 'app-about',
  imports: [CommonsModule, FirstSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {}
