import React from 'react';
import { IButtons } from '../fragments/InputWithClear';
import { Button } from './Button';



interface IInputProps {
  type: string;
  value?: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number | undefined>>;
  buttons: IButtons[];
}

export const Input = ({type, value, setValue, buttons}: IInputProps) => {

  const leftButtons = buttons.filter((button) => button.side === 'left');
  const rightButtons = buttons.filter((button) => button.side === 'right');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
    setValue(newValue);
  }
  
  return(
    <>
    {leftButtons.map((item) => <Button onClick={item.onClick} text={item.text} />)}
      <input type={type}
      value={value}
      onChange={onChangeHandler}
      />
    {rightButtons.map((item) => <Button onClick={item.onClick} text={item.text} />)}    
    </>
  )
}