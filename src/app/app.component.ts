import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: any;
  type = 'all';

  /** 不內含轉換的寫法，直接傳入 event 事件
   * 樣版用法 (keyup.enter)="addTodo($event)"
   */
  addTodo($event: Event) {
    const target = <HTMLInputElement>$event.target;
    console.log(target.value);
    this.todos.push({value: this.todo, done: false});
    this.todo = '';
  }

  /** 內含轉換的寫法，傳入 event
   * 的當前對象，在參數列中設定型別（EventTarget->HTMLInputElement，內含有轉型的效果）
   * 樣版用法 (keyup.enter)="addTodo($event.target)"
   */
  addTodo2(target: HTMLInputElement) {
    console.log(target.value);
    this.todos.push({value: this.todo, done: false});
    this.todo = '';
  }

  clearCompleted($event) {
    console.log('clearCompleted', $event);
    this.todos = $event;
  }

  selectType($event) {
    console.log('selectType', $event);
    this.type = $event;
  }
}
