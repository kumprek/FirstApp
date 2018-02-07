import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'page-data-input',
  templateUrl: 'data-input.html'
})
export class DataInputPage {
  private todo : FormGroup;

  constructor( private formBuilder: FormBuilder, public http: HttpClient) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  logForm(){
    console.log(this.todo.value);
	
	
	var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
 
    let postParams = {
      title: this.todo.value.title,
      body: this.todo.value.description,
      userId: 1
    }
    
    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, { headers:headers})
      .subscribe(data => {
		  console.log(data);
	   }, error => {
        console.log(error);// Error getting the data
      });
  }
}