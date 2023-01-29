import { makeAutoObservable } from 'mobx';
import { CountryInfo, getCountryByName } from '../api/apiService';

const newArray = (array: CountryInfo[], count: number) => {
  const newArray: CountryInfo[] = [];
  for (const item of array) {
    if(newArray.find(arrayItem => arrayItem.name === item.name) === undefined) {
      newArray.push(item);
    }
  }
  return newArray.slice(0, count);
}

export interface IStore {
  countries:CountryInfo[];
  getCountries: (newValue: string, count: number) => void
}

export const store1 = makeAutoObservable<IStore>({
  countries: [],
  getCountries: (newValue: string, count: number) => {
    getCountryByName(newValue).then(res => {store1.countries = newArray(res, count)});
  } 
});

export const store2 = makeAutoObservable<IStore>({
  countries: [],
  getCountries: (newValue: string, count: number) => {
    getCountryByName(newValue).then(res => {store2.countries = newArray(res, count)});
  } 
});




