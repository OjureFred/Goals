import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    {id:1, name: 'Watch Finding Nimo', description: 'Find an online version and watch Merlin find his son'},
    {id:2, name: 'Buy Cookies', description: 'I have to buy cookies for the parrot'},
    {id:3, name: 'Get new Phone case', description: 'Diana has her birthday coming up soon'},
    {id:4, name: 'Get Dog food', description: 'Pupper likes expensive snacks'},
    {id:5, name: 'Solve Math Homework', description: 'Damn math'},
    {id:6, name: 'Plot my world domination plan', description: 'Cause I am an evil overload'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
