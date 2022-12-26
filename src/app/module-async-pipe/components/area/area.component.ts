import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Area} from '../../../interfaces/area'
import {RestApiService} from '../../../services/rest-api.service'
import {concatMap, filter, groupBy, map, mergeMap, of, toArray, zip} from 'rxjs'
import {group} from '@angular/animations'

@Component({
  selector: 'app-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  @Input() areaModel!: Area;

  constructor(private changeDetectorRef: ChangeDetectorRef, private restAPIService: RestApiService) {
  }

  ngOnInit() {
    this.areaModel.thingsOb = this.restAPIService.getThings(this.areaModel.areaId)
    this.changeDetectorRef.markForCheck();
  }

}

