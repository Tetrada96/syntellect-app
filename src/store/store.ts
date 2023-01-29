import { makeAutoObservable} from 'mobx';
import { CountryInfo, getCountryByName } from '../api/apiService';

class Store {
  countries: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCountries(newValue: string) {
    getCountryByName(newValue).then(res => {this.countries = res});
  }
}

export const store = new Store();
