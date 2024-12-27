import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { NavigationComponent } from './navigation/navigation.component';

const COMMON_COMPONENTS = [CardComponent, NavigationComponent];

@NgModule({
  imports: [...COMMON_COMPONENTS],
  declarations: [],
  exports: [...COMMON_COMPONENTS],
  providers: [],
})
export class CommonsModule {}
