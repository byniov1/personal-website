import { Component } from '@angular/core';
import { CommonsModule } from '../common/common.module';
import { FirstSectionComponent } from './first-section/first-section.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-about',
  imports: [
    CommonsModule,
    FirstSectionComponent,
    ExperienceComponent,
    SkillsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {}
