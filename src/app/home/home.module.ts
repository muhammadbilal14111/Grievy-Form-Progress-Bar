import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Survey2CompComponent } from './../survey2-comp/survey2-comp.component';
import { Survey3CompComponent } from '../survey3-comp/survey3-comp.component';
import { Survey4CompComponent } from '../survey4-comp/survey4-comp.component';
import { SurveyResultComponent } from '../survey-result/survey-result.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    Survey2CompComponent,
    Survey3CompComponent,
    Survey4CompComponent,
    SurveyResultComponent,
  ],
})
export class HomePageModule {}
