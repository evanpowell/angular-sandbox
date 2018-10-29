import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: object = {};
  currentStyles: object = {};

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main St',
          city: 'Boston',
          state: 'MA'
        },
        image: 'https://placeimg.com/600/600/people/3',
        isActive: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 50,
        address: {
          street: '20 School St',
          city: 'Otherplace',
          state: 'MA'
        },
        image: 'https://placeimg.com/600/600/people/4',
        isActive: false
      },
      {
        firstName: 'Karen',
        lastName: 'Smazz',
        age: 24,
        address: {
          street: '123 Beach St',
          city: 'Orlando',
          state: 'FL'
        },
        image: 'https://placeimg.com/600/600/people/11',
        isActive: true
      }
    ];

    this.loaded = true;
    // this.showExtended = false;

    this.addUser({
      firstName: 'Captain',
      lastName: 'Kangaroo'
    })

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : ' 3rem',
      'font-size': this.showExtended ? '' : '2.3rem'
    }
  }
}
