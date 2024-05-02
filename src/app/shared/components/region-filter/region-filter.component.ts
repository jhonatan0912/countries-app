import { NgClass, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, PLATFORM_ID, inject, output } from '@angular/core';
import { Region, regions } from '@shared/utils';



@Component({
  selector: 'filter-by-region',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.scss']
})
export class RegionFilterComponent implements AfterViewInit {

  private readonly _platformId = inject(PLATFORM_ID);

  onFilter = output<string>();

  regions: Region[] = regions;
  showRegions: boolean = false;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this._platformId)) {

    }
  }

  onShowRegions(): void {
    this.showRegions = !this.showRegions;
  }

  onSelectRegion(id: string): void {
    this.onFilter.emit(id);
  }
}