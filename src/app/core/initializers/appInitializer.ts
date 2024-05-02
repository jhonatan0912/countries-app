import { Injector } from '@angular/core';
import { AppThemeService } from '@shared/services';

export const appInitializer = (injector: Injector) => {
  return () => {
    return new Promise<void>((resolve) => {
      const themeService = injector.get(AppThemeService);

      themeService.init();

      resolve();
    });
  };
};