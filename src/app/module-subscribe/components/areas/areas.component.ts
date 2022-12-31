import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Area } from '../../../interfaces/area';

@Component({
  selector: 'app-areas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
})
export class AreasComponent implements OnInit {
  areas: Area[] = [];
  constructor(private changeDetectorRef: ChangeDetectorRef, private restAPIService: RestApiService) {}

  ngOnInit() {
    this.restAPIService.getAreas().subscribe((response: any) => {
      this.areas = response;
      this.changeDetectorRef.markForCheck();
    });
  }
}
