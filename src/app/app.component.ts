import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './common/navigation/navigation.component';
import { CommonsModule } from './common/common.module';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'personal-website';
}
