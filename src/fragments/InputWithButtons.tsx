import React from 'react';
import { IButtons } from './InputWithClear';
import { Button } from '../components/Button';



interface IInputProps {
  type: string;
  value?: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  buttons: IButtons[];
}

const renderButtonFromArray = (array: IButtons[], side: 'left' | 'right') => {
  return <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>{array.filter((button) => button.side === side).map((item) => <Button key={item.text} onClick={item.onClick} text={item.text} />)}</div> ;
}


export const Input = ({type, value, setValue, buttons}: IInputProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
    setValue(newValue);
  }
  
  return(
    <div style={{display: 'flex', gap: '10px'}}>
    {renderButtonFromArray(buttons, 'left')}
      <input type={type}
      value={value}
      onChange={onChangeHandler}
      />
    {renderButtonFromArray(buttons, 'right')}    
    </div>
  )
}