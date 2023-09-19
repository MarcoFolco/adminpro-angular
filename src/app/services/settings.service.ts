import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const storagedThemeUrl = localStorage.getItem('themeUrl');
    const currentThemeUrl =
      storagedThemeUrl || './assets/css/colors/blue-dark.css';
    this.linkTheme?.setAttribute('href', currentThemeUrl);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('themeUrl', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    const currentThemeUrl = this.linkTheme?.getAttribute('href');
    links.forEach((element) => {
      const btnTheme = element.getAttribute('data-theme') || '';
      if (currentThemeUrl?.includes(btnTheme)) element.classList.add('working');
      else element.classList.remove('working');
    });
  }
}
