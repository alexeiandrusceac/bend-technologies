import {Component, OnInit} from '@angular/core';
import {RestApiService} from './services/rest-api.service'
import {response} from 'express'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bend-technologies';

  constructor(private restAPIService: RestApiService){

  }

  ngOnInit() {
    this.restAPIService.getThings().subscribe((response: any)=>{
      console.log(response);
    });
  }
}
