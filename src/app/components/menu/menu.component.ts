import { Component } from '@angular/core';
import { IMenuOptions } from 'src/app/models/interfaces';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public arrayMenuOptions : IMenuOptions[] = [
    {
      title: 'menuTitles.user',
      icon: assetUrl('images/svg/icons/folder.svg'),
      options: [
        {
          text: 'menuOptions.profile',
          url: '/users'
        },
        {
          text: 'menuOptions.certificates',
          url: '/cert'
        }
      ]
    }
  ]
}
