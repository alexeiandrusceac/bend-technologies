import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateGroupsPipe } from '../generated-groups.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [GenerateGroupsPipe],
  exports: [GenerateGroupsPipe],
  providers: [GenerateGroupsPipe],
})
export class SharedModule {}
