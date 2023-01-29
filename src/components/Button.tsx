import React from 'react';

interface IButtonProps {
  onClick: () => void;
  text?: string
}

export const Button = ({text, onClick}: IButtonProps) => {
  return (
      <button style={{padding: '10px', backgroundColor: 'rgba(0,0,0,0.1)'}} onClick={onClick}>{text}</button>
  )
}