import { Component, OnInit } from '@angular/core';
import { Greeting } from './Greeting';
import { GreetingSubject } from './greetingSubject';
import { GREETINGS } from './allGreetings';
import { GREETING_SUBJECTS } from './allGreetingSubjects';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  greetings = GREETINGS
  greetingSubjects = GREETING_SUBJECTS
  greeting: String
  greetingSubject: String


  constructor() {
    this.greeting = this.greetings[randomNumber(0, this.greetings.length)].text;
    this.greetingSubject = this.greetingSubjects[randomNumber(0, this.greetingSubjects.length)].text;
  }

  ngOnInit(): void {
  }
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
