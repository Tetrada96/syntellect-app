import React, { useState } from 'react';
import { Input } from './InputWithButtons';

export interface IButtons {
  side: 'left' | 'right';
  text: string;
  onClick: () => void;
}

export const InputWithClear = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const buttons: IButtons[] = [{text: 'Очистить', onClick: () => setValue(''), side: 'right'}, {text: 'Hello World', onClick: () => setValue('Hello World'), side: 'right'}]

  
  return (
      <div style={{padding: '10px'}}>
          <Input value={value} setValue={setValue} type='string' buttons={buttons} />
      </div>
  )
}