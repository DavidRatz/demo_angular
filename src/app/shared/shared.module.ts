import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureFormatPipe } from './pipes/voiture-format.pipe';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';



@NgModule({
  declarations: [
    VoitureFormatPipe,
    ChronoFormatPipe 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VoitureFormatPipe,
    ChronoFormatPipe
  ]
})
export class SharedModule { }
