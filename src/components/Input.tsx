import React from 'react';

export interface IInputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({value, onChange}: IInputProps) => {
  
  return(
      <input value={value} onChange={onChange} />  
  )
}