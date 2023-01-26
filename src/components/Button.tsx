import React from 'react';

interface IButtonProps {
  onClick: () => void;
  text?: string
}

export const Button = ({text, onClick}: IButtonProps) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}