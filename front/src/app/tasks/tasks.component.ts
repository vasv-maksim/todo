import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: string[] = [
    'Найти ананас',
    'Выбрать ананас',
    'Купить ананас',
    'Донести ананас',
    'Положить ананас в холодильник',
    'Достать ананас из холодильника',
    'Почистить ананас',
    'Разрезать ананас',
    'Сесть ананас',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
