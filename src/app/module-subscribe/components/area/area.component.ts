import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Area } from '../../../interfaces/area';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'app-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  @Input() areaModel!: Area;

  constructor(private changeDetectorRef: ChangeDetectorRef, private restAPIService: RestApiService) {}

  ngOnInit() {
    this.restAPIService.getThings(this.areaModel.areaId).subscribe((response: any) => {
      this.areaModel.things = response;
      this.changeDetectorRef.markForCheck();
    });
  }
}
