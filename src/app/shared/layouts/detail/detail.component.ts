import { Component, OnInit, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CountryDto } from '@core/proxies';
import { CountriesService } from '@shared/services';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private readonly _countriesService = inject(CountriesService);
  private readonly _router = inject(Router);

  name = input.required<string>();
  country = signal<CountryDto>(new CountryDto());

  ngOnInit() {
    this.onGetCountryDetails();
  }

  onGetCountryDetails(): void {
    if (!this._countriesService.country()) {
      this.onBack();
    } else {
      this.country.set(this._countriesService.country()!);
    }
  }

  onBack(): void {
    this._router.navigateByUrl('/');
  }
}
