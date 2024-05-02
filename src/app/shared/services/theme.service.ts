import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { Theme } from '@core/types';

@Injectable({
  providedIn: 'root'
})
export class AppThemeService {

  private readonly _platformId = inject(PLATFORM_ID);

  theme = signal<Theme>('dark');

  init(): void {
    if (!isPlatformBrowser(this._platformId)) return;

    const theme = localStorage.getItem('theme') as Theme;
    this.setTheme(theme);
  }

  toggle(): void {
    this.theme.update((current) => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      this.setThemeToBody(newTheme);
      return newTheme;
    });
  }

  private setTheme(theme: Theme | undefined): void {
    if (!theme) {
      this.theme.set(this.preference());
      localStorage.setItem('theme', this.preference());
      this.setThemeToBody(this.preference());
    } else {
      this.theme.set(theme);
      this.setThemeToBody(theme);
    }
  }

  private preference(): Theme {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return isDark ? 'dark' : 'light';
  }

  private setThemeToBody(theme: Theme): void {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }
}
