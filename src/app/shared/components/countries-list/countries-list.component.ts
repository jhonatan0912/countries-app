import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { CountryDto } from '@core/proxies';
import { CountriesService } from '@shared/services';
import { CountryComponent } from '../country/country.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'countries-list',
  standalone: true,
  imports: [
    CountryComponent,
  ],
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent {

  private readonly _countriesService = inject(CountriesService);
  private readonly _router = inject(Router);

  countries = input.required<CountryDto[]>();

  onCountry(country: CountryDto): void {
    this._countriesService.country.set(country);
    this._router.navigateByUrl(`/${this.onSanitize(country.name)}`);
  }

  onSanitize(countryName: string): string {
    return countryName.replace(/[^a-zA-Z0-9]/g, '');
  }
}
