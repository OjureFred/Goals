import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals() {
    return [
      new Goal(1, 'Watch Finding Nimo', 'Find an online version and watch Merlin find his son', new Date(2020, 3, 14)),
      new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019, 6, 9)),
      new Goal(3, 'Get new Phone case', 'Diana has her birthday coming up soon', new Date(2022, 1, 12)),
      new Goal(4, 'Get Dog food', 'Pupper likes expensive snacks', new Date(2019, 10, 18)),
      new Goal(5, 'Solve Math Homework', 'Damn math', new Date(2019, 2, 14)),
      new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overload', new Date(2030, 3, 14)),
    ];
  }

  constructor() { }
}
