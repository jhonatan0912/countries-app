import { Component, OnInit, input } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { CountryDto } from '@core/proxies';

@Component({
  selector: 'countries-list',
  standalone: true,
  imports: [
    CountryComponent,
  ],
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries = input.required<CountryDto[]>();

  constructor() { }

  ngOnInit() {
  }

}
