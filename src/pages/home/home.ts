import { Component } from '@angular/core';

import {PeopleServiceProvider} from '../../providers/people-service/people-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})
export class HomePage {
  public people: Array<{results:any}>=[];
  public information : any;

  constructor(public peopleService: PeopleServiceProvider){
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.information = data;
	  this.people = this.information.results;
	  console.log(this.people);
	  
    });
  }
}

