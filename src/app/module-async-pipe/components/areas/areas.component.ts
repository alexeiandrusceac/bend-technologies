import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RestApiService} from '../../../services/rest-api.service'
import {Area} from '../../../interfaces/area'
import {forkJoin, Observable} from 'rxjs'
import {Thing} from '../../../interfaces/thing'

@Component({
  selector: 'app-areas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  areas$: Observable<Area[]> | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef, private restAPIService: RestApiService) {
  }

  ngOnInit() {
    this.areas$ = this.restAPIService.getAreas()
    this.changeDetectorRef.markForCheck();
  }
}
