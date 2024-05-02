import { NgClass } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';

interface Region {
  id: string;
  name: string;
}

@Component({
  selector: 'filter-by-region',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.scss']
})
export class RegionFilterComponent {

  onFilter = output<string>();

  regions: Region[] = [
    { id: 'africa', name: 'Africa' },
    { id: 'americas', name: 'America' },
    { id: 'asia', name: 'Asia' },
    { id: 'europe', name: 'Europe' },
    { id: 'oceania', name: 'Oceania' }
  ];

  showRegions: boolean = false;

  onShowRegions(): void {
    this.showRegions = !this.showRegions;
  }

  onSelectRegion(id: string): void {
    this.onFilter.emit(id);
  }
}
