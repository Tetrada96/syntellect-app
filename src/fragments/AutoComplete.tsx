import React, { useState } from "react";
import { Input } from "../components/Input";
import { Select }  from "../components/Select";


import { store } from '../store/store';

export const AutoComplete = () => {
    const [value, setValue] = useState<string>('');

    console.log(store.countries)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        store.getCountries(newValue);
      }

    return <div>
        <Input value={value} onChange={onChangeHandler} />
        <Select store={store} />
    </div>
}