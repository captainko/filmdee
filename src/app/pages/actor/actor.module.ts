import { CardsModule } from './../../shared/components/cards/cards.module';
import { ActorRoutingModule } from './actor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor.component';

@NgModule({
  declarations: [ActorComponent],
  imports: [
    CommonModule,
    ActorRoutingModule,
    CardsModule
  ]
})
export class ActorModule { }
