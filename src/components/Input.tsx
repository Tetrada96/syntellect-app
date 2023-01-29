import React from 'react';

export interface IInputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({value, onChange}: IInputProps) => {
  
  return(
      <input style={{padding: '10px'}} value={value} onChange={onChange} />  
  )
}