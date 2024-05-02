import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CountriesProxy, CountryDto } from '@core/proxies';
import { CountriesListComponent, RegionFilterComponent, SearchBarComponent } from '@shared/components';
import { CountriesService } from '@shared/services';

@Component({
  standalone: true,
  imports: [
    SearchBarComponent,
    RegionFilterComponent,
    CountriesListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly _countriesProxy = inject(CountriesProxy);
  private readonly _countriesService = inject(CountriesService);
  private readonly _destroyRef = inject(DestroyRef);

  countries = signal<CountryDto[]>([]);

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    if (this._countriesService.loaded()) {
      this.countries.set(this._countriesService.countries());
    } else {
      this._countriesProxy.getAll()
        .pipe(
          takeUntilDestroyed(this._destroyRef)
        ).subscribe({
          next: (countries) => {
            this.countries.set(countries);
            this._countriesService.countries.set(countries);
            this._countriesService.loaded.set(true);
          }
        });
    }
  }

  onSearch(term: string): void {
    this.countries.update(() => {
      if (term.length === 0) {
        return this._countriesService.countries();
      }
      return this.countries().filter(country => country.name.toLowerCase().includes(term));
    });
  }

  onFilterByRegion(regionId: string): void {
    this.countries.set(this._countriesService.countries());
    this.countries.update(() => {
      return this.countries().filter(country => country.region.toLowerCase() === regionId);
    });
  }
}
