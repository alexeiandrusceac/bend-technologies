import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Thing} from '../../interfaces/thing'

@Component({
  selector: 'app-thing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss']
})
export class ThingComponent implements OnInit {
  class: string = '';
  @Input() thingModel!: Thing;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (!this.thingModel.joinedWith) {
      if (this.thingModel.status === 'open') {
        this.class = 'parent yellow';
      } else {
        this.class = 'parent orange';
      }
    }
    this.changeDetectorRef.markForCheck();
  }
}
