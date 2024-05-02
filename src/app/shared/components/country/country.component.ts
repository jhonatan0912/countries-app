import { Component, OnInit, input } from '@angular/core';
import { CountryDto } from '@core/proxies';

@Component({
  selector: 'country-item',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country = input.required<CountryDto>();

  constructor() { }

  ngOnInit() {
  }

}
