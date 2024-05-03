import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesProxy {

  private readonly _http = inject(HttpClient);

  getAll(): Observable<CountryDto[]> {
    return this._http.get('/assets/data.json').pipe(mergeMap((data: any) => of(data.map((i: any) => new CountryDto().fromJS(i)))));
  }
}

export class CountryDto {
  name!: string;
  topLevelDomain!: string[];
  alpha2Code!: string;
  alpha3Code!: string;
  callingCodes!: string[];
  capital!: string;
  altSpellings!: string[];
  subregion!: string;
  region!: string;
  population!: number;
  latlng!: number[];
  demonym!: string;
  area!: number;
  timezones!: string[];
  borders!: string[];
  nativeName!: string;
  numericCode!: string;
  flags!: CountryFlagsDto;
  currencies!: CountryCurrencyDto[];
  formatedCurrencies!: string;
  languages!: CountryLanguageDto[];
  formatedLanguages!: string;
  translations!: CountryTranslations;
  flag!: string;
  regionalBlocs!: CountryRegionalBlocs;
  cioc!: string;
  independent!: boolean;

  init(data?: any): void {
    if (data) {
      this.name = data['name'];
      this.topLevelDomain = data['topLevelDomain'];
      this.alpha2Code = data['alpha2Code'];
      this.alpha3Code = data['alpha3Code'];
      this.callingCodes = data['callingCodes'];
      this.capital = data['capital'];
      this.altSpellings = data['altSpellings'];
      this.subregion = data['subregion'];
      this.region = data['region'];
      this.population = data['population'];
      this.latlng = data['latlng'];
      this.demonym = data['demonym'];
      this.area = data['area'];
      this.timezones = data['timezones'];
      this.borders = data['borders'];
      this.nativeName = data['nativeName'];
      this.numericCode = data['numericCode'];
      this.flags = data['flags'] ? new CountryFlagsDto().fromJS(data['flags']) : <any>undefined;
      this.currencies = data['currencies'] ? data['currencies'].map((i: any) => new CountryCurrencyDto().fromJS(i)) : [];
      this.formatedCurrencies = this.formatWithCommas(data['currencies']);
      this.languages = data['languages'] ? data['languages'].map((i: any) => new CountryLanguageDto().fromJS(i)) : [];
      this.formatedLanguages = this.formatWithCommas(data['languages']);
      this.translations = data['translations'] ? new CountryTranslations().fromJS(data['translations']) : <any>undefined;
      this.flag = data['flag'];
      this.regionalBlocs = data['regionalBlocs'] ? new CountryRegionalBlocs().fromJS(data['regionalBlocs']) : <any>undefined;
      this.cioc = data['cioc'];
      this.independent = data['independent'];
    }
  }

  formatWithCommas<T>(list: T[]): string {
    return !list
      ? ''
      : list.map((i: any) => i.name).join(', ');
  }

  fromJS(data: any): CountryDto {
    const result = new CountryDto();
    result.init(data);
    return result;
  }
}

export class CountryFlagsDto {
  svg!: string;
  png!: string;

  init(data?: any): void {
    if (data instanceof CountryFlagsDto) {
      this.svg = data['svg'];
      this.png = data['png'];
    }
  }

  fromJS(data: any): CountryFlagsDto {
    const result = new CountryFlagsDto();
    result.init(data);
    return result;
  }
}

export class CountryCurrencyDto {
  code!: string;
  name!: string;
  symbol!: string;

  init(data?: any): void {
    if (data instanceof CountryCurrencyDto) {
      this.code = data['code'];
      this.name = data['name'];
      this.symbol = data['symbol'];
    }
  }

  fromJS(data: any): CountryCurrencyDto {
    const result = new CountryCurrencyDto();
    result.init(data);
    return result;
  }
}

export class CountryLanguageDto {
  iso639_1!: string;
  iso639_2!: string;
  name!: string;
  nativeName!: string;

  init(data?: any): void {
    if (data instanceof CountryLanguageDto) {
      this.iso639_1 = data['iso639_1'];
      this.iso639_2 = data['iso639_2'];
      this.name = data['name'];
      this.nativeName = data['nativeName'];
    }
  }

  fromJS(data: any): CountryLanguageDto {
    const result = new CountryLanguageDto();
    result.init(data);
    return result;
  }
}

export class CountryTranslations {
  br!: string;
  pt!: string;
  nl!: string;
  hr!: string;
  fa!: string;
  de!: string;
  es!: string;
  fr!: string;
  ja!: string;
  it!: string;
  hu!: string;

  init(data?: any): void {
    if (data instanceof CountryTranslations) {
      this.br = data['br'];
      this.pt = data['pt'];
      this.nl = data['nl'];
      this.hr = data['hr'];
      this.fa = data['fa'];
      this.de = data['de'];
      this.es = data['es'];
      this.fr = data['fr'];
      this.ja = data['ja'];
      this.it = data['it'];
      this.hu = data['hu'];
    }
  }

  fromJS(data: any): CountryTranslations {
    const result = new CountryTranslations();
    result.init(data);
    return result;
  }
}

export class CountryRegionalBlocs {
  acronym!: string;
  name!: string;

  init(data?: any): void {
    if (data instanceof CountryRegionalBlocs) {
      this.acronym = data['acronym'];
      this.name = data['name'];
    }
  }

  fromJS(data: any): CountryRegionalBlocs {
    const result = new CountryRegionalBlocs();
    result.init(data);
    return result;
  }
}