import React, { useState } from 'react';
import { Input } from './InputWithButtons';

export interface IButtons {
  side: 'left' | 'right';
  text: string;
  onClick: () => void;
}

export const InputWithAlertButtons = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const isNumber = (value: string) => {
    if (!isNaN(Number(value))) {
        return value;
    }
    else {
        return false;
    }
  }

  const buttons: IButtons[] = [{text: 'Вывести текст в алерте', onClick: () => alert(value ? value : ''), side: 'right'}, {text: 'Вывести число в алерте', onClick: () => {value && isNumber(value) && alert(value)}, side: 'left'}]

  
  return (
      <div style={{padding: '10px'}}>
          <Input value={value} setValue={setValue} type='string' buttons={buttons} />
      </div>
  )
}