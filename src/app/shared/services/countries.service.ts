import { Injectable, signal } from '@angular/core';
import { CountryDto } from '@core/proxies';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  loaded = signal<boolean>(false);
  countries = signal<CountryDto[]>([]);

  country = signal<CountryDto | undefined>(undefined);
}
