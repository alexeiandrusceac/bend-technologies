import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Area } from '../../../interfaces/area';
import { RestApiService } from '../../../services/rest-api.service';
import { map } from 'rxjs';
import { GenerateGroupsPipe } from '../../../generated-groups.pipe';

@Component({
  selector: 'app-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  @Input() areaModel!: Area;

  constructor(private changeDetectorRef: ChangeDetectorRef, private restAPIService: RestApiService, private generateGroupsPipe: GenerateGroupsPipe) {}

  ngOnInit() {
    this.areaModel.thingsOb = this.restAPIService.getThings(this.areaModel.areaId).pipe(
      map((thing: any) => {
        return this.generateGroupsPipe.transform(thing);
      })
    );
    this.changeDetectorRef.markForCheck();
  }
}
