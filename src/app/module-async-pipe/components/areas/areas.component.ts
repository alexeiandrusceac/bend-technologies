import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Area } from '../../../interfaces/area';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-areas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
})
export class AreasComponent implements OnInit {
  areas$: Observable<Area[]> | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef, private restAPIService: RestApiService) {}

  ngOnInit() {
    this.areas$ = this.restAPIService.getAreas();
    this.changeDetectorRef.markForCheck();
  }
}
