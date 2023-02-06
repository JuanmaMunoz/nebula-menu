import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { TypeLink } from 'src/app/models/enums';
import { IMenuOptions, INavigationEnd } from 'src/app/models/interfaces';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.pipe(filter((r) => r instanceof NavigationEnd)).subscribe((data: Partial<INavigationEnd>) => {
        if (data.url !== '/doc') {
          sessionStorage.setItem('nebulaLastUrl', data.url as string);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public arrayMenuOptions: IMenuOptions[] = [
    {
      title: 'menuTitles.user',
      icon: assetUrl('images/svg/icons/folder.svg'),
      options: [
        {
          text: 'menuOptions.profile',
          action: '/users',
          type: TypeLink.internal,
        },
        {
          text: 'menuOptions.certificates',
          action: '/cert',
          type: TypeLink.internal,
        },
      ],
    },
    {
      title: 'menuTitles.documentation',
      icon: assetUrl('images/svg/icons/folder.svg'),
      options: [
        {
          text: 'menuOptions.docStart',
          action: 'docStart',
          type: TypeLink.handler,
        },
        {
          text: 'menuOptions.docUserGuide',
          action: 'docUserGuide',
          type: TypeLink.handler,
        },
        {
          text: 'menuOptions.linkExt',
          action: 'http://192.168.0.13:8080/es/HTML/getting-started.html',
          type: TypeLink.external,
        },
      ],
    },
  ];

  goDoc(action: string): void {
    sessionStorage.setItem('nebulaDocUrl', action);
    this.router.navigate(['/doc']);
  }

  actionsOptions(action: string): void {
    switch (action) {
      case 'docStart':
      case 'docUserGuide':
        this.goDoc(action);
    }
  }
}
