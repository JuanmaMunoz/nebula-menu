import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuOptions } from 'src/app/models/interfaces';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss'],
})
export class MenuOptionsComponent {
  @Input() menuOptions: IMenuOptions = {
    title: '',
    icon: '',
    options: [],
  };
  @Output() actionsEvent: EventEmitter<string> = new EventEmitter();

  public action(action: string): void {
    this.actionsEvent.emit(action);
  }
}
