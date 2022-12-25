import {Component, OnInit} from '@angular/core';
import {RestApiService} from './services/rest-api.service'
import {response} from 'express'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bend-technologies';

  constructor(private router: Router){
  }
  ngOnInit() {
  }

  send() {
    this.router.navigate(['/module-subscribe'])
  }
}
