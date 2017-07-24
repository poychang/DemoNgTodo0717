import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() todos: any[];
  @Output() clearCompleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clearCompletedFromFooter() {
    this.todos = this.todos.filter(item => !item.done);
    this.clearCompleted.emit(this.todos);
  }
}
