import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nebula-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nebula-menu';
  public languageSelected: string = localStorage.getItem('nebulaLanguage') || 'en';
  constructor(private translate: TranslateService) {
  }

  ngOnInit(){
    this.translate.setDefaultLang('es');
    this.useLanguage();
  }

  changeLanguage(): void {
    this.languageSelected = this.languageSelected === 'en' ? 'es' : 'en';
    this.useLanguage();
  }

  useLanguage():void{
    this.translate.use(this.languageSelected);
    localStorage.setItem('nebulaLanguage', this.languageSelected);
  }
}
