import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {filter, groupBy, GroupedObservable, map, mergeMap, Observable, of, reduce, takeWhile, toArray, zip} from 'rxjs'
import {Thing} from '../interfaces/thing'
import {Area} from '../interfaces/area'
import {environment} from '../../environments/environment'
import {response} from 'express'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) {
  }

  getThings(areaId: any): Observable<Thing[]> {
   return  this.httpClient.get<Thing[]>(environment.backend_url + 'api/things').pipe(
      map((response: any) => { return response.filter((x: any) => x.areaId === areaId)} ),
    )
  }

  getAreas(): Observable<Area[]> {
    return this.httpClient.get<Area[]>(environment.backend_url + 'api/areas');
  }
}
