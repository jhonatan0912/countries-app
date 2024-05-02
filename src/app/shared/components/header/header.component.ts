import { Component, OnInit, inject } from '@angular/core';
import { AppThemeService } from '@shared/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  themeService = inject(AppThemeService);

  get themeSrc(): string {
    return this.themeService.theme() === 'dark'
      ? '/assets/icons/moon.svg'
      : '/assets/icons/sun.svg';
  }
}
