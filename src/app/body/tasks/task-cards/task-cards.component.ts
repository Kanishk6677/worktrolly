import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksId } from 'src/app/Interface/TasksInterface';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  @Input('tasks') tasks: TasksId[]

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.tasks.length);
  }

  openTaskDetails(id: string) {
    this.router.navigate(['/TaskDetails', id]);
  }

}
