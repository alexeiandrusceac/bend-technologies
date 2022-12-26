import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenerateChildPipe} from '../generated-child.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GenerateChildPipe
  ],
  exports: [
    GenerateChildPipe
  ]
})
export class SharedModule { }
