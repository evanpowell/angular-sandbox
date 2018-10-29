import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    } else {

    }
  }
}
