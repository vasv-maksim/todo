import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Task } from '../common/models';

@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: Task[] = [
    {
      id: 1,
      name: 'Найти ананас',
      done: true,
    },
    {
      id: 2,
      name: 'Выбрать ананас',
      done: true,
    },
    {
      id: 3,
      name: 'Купить ананас',
      done: true,
    },
    {
      id: 4,
      name: 'Донести ананас',
      done: false,
    },
    {
      id: 5,
      name: 'Положить ананас в холодильник',
      done: false,
    },
    {
      id: 6,
      name: 'Достать ананас из холодильника',
      done: false,
    },
    {
      id: 7,
      name: 'Почистить ананас',
      done: false,
    },
    {
      id: 8,
      name: 'Разрезать ананас',
      done: false,
    },
    {
      id: 9,
      name: 'Съесть ананас',
      done: false,
    },
  ];

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
