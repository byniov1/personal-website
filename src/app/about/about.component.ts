import { Component } from '@angular/core';
import { CommonsModule } from '../common/common.module';
import { FirstSectionComponent } from './first-section/first-section.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [
    CommonsModule,
    FirstSectionComponent,
    ExperienceComponent,
    SkillsComponent,
    FooterComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {}
