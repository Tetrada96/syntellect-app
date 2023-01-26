import React, { useState } from 'react';
import { Input } from '../components/Input';

export interface IButtons {
  side: 'left' | 'right';
  text: string;
  onClick: () => void;
}

const buttons: IButtons[] = [{text: 'Удалить', onClick: () => console.log(1), side: 'left'}, {text: 'Сохранить', onClick: () => console.log(2), side: 'right'}, {text: 'Поправить', onClick: () => console.log(3), side: 'left'}]

export const InputWithClear = () => {
  const [value, setValue] = useState<string | undefined | number>(undefined);
  
  return (
      <div>
          <Input value={value} setValue={setValue} type='string' buttons={buttons} />
      </div>
  )
}