import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeuristicsComponent } from './heuristics/heuristics.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: HeuristicsComponent }])
  ],
  declarations: [HeuristicsComponent]
})
export class ArtificialIntelligenceModule {}
