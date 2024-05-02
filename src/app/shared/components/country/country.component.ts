import { Component, HostListener, input, output } from '@angular/core';
import { CountryDto } from '@core/proxies';

@Component({
  selector: 'country-item',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  country = input.required<CountryDto>();

  onCountry = output<void>();

  @HostListener('click')
  onClick(): void {
    this.onCountry.emit();
  }
}
