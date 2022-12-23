import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Thing} from '../interfaces/thing'
import {Area} from '../interfaces/area'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) {}

  getThings(): Observable<Thing[]> {
    return this.httpClient.get<Thing[]>(environment.backend_url +'api/things');
  }

  getAreas(): Observable<Area[]>{
    return this.httpClient.get<Area[]>(environment.backend_url +'/api/areas');
  }
}
