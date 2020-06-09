import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Watch Finding Nimo', 'Find an online version and watch Merlin find his son'),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new Goal(3, 'Get new Phone case', 'Diana has her birthday coming up soon'),
    new Goal(4, 'Get Dog food', 'Pupper likes expensive snacks'),
    new Goal(5, 'Solve Math Homework', 'Damn math'),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overload'),
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    this.goals.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
