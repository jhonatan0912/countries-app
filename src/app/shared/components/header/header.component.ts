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

  get icon(): string {
    return this.themeService.theme() === 'dark'
      ? 'icon sun'
      : 'icon moon';
  }

  get iconSrc(): string {
    return this.themeService.theme() === 'dark'
      ? '/assets/icons/sun.svg'
      : '/assets/icons/moon.svg'
  }
}
