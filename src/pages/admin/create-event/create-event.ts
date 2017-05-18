import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { states } from '../../../static_json/states';

@Component({
  templateUrl: 'create-event.html'
})
export class CreateEvent implements OnInit{
  states;
  constructor(public nav: NavController,
    private http: Http) {
  	
  }


  ngOnInit(){
    this.states = states;

  }

}


