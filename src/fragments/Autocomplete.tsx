import React, { useState } from "react";
import { Input } from "../components/Input";
import SelectComponent   from "../components/Select";
import { IStore } from '../store/store';

export const Autocomplete = ({countVariants, store, nameStore}: {countVariants: number; store: IStore; nameStore: 'store1' | 'store2'}) => {
  const [value, setValue] = useState<string | undefined>(undefined);

    const onChangeSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      return newValue;
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = onChangeSelectHandler(e);
      store.getCountries(newValue, countVariants);
    }

    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '700px', padding: '10px'}}>
        <Input value={value} onChange={onChangeHandler} />
        <SelectComponent value={value} nameStore={nameStore} setValue={onChangeSelectHandler} />
      </div>
      )
};
