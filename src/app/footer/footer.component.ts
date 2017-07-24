import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyFilterPipe} from 'app/pipes/my-filter.pipe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() todos: any[];
  @Output() clearCompleted = new EventEmitter();
  @Output() selectType = new EventEmitter();
  selectedType = 'all';

  constructor() {}

  ngOnInit() {}

  clearCompletedFromFooter() {
    this.todos = this.todos.filter(item => !item.done);
    this.clearCompleted.emit(this.todos);
  }

  selectTypeFromFooter(type) {
    this.selectedType = type;
    this.selectType.emit(type);
  }
}
