import { Component, Input } from '@angular/core';
import { IMenuOptions } from 'src/app/models/interfaces';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss']
})
export class MenuOptionsComponent {
  @Input() menuOptions: IMenuOptions = {
    title:'',
    icon:'',
    options: []
  };



}
