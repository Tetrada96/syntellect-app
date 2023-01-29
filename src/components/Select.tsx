import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { observer } from 'mobx-react';
import { store1, store2 } from '../store/store';

interface ISelectProps {
  value: string | undefined;
  nameStore: 'store1' | 'store2';
  setValue:(e: any) => void;
}

const SelectComponent = ({value, nameStore, setValue}: ISelectProps) => {
  const countries = nameStore === 'store1' ?  store1.countries : store2.countries;
  
  return (
    <>
    {countries.length !== 0 ?
      (<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">Страна</InputLabel>
      <Select sx={{width: '700px', '& .MuiSelect-select': {display: 'flex', gap: '10px'}}} onChange={setValue} value={value} >
        {countries.length !== 0 ? 
          countries.map((item) => {return (
          <MenuItem value={`${item.name}, ${item.fullName}`}>
            <>
            <div>{`${item.name}, ${item.fullName}`}</div>
            <div style={{backgroundImage: `url(${item.flag})`, width: '50px', height: '25px'}} />
          </></MenuItem>)}) : <MenuItem>Нет доступных вариантов</MenuItem> }

      </Select>      
    </FormControl>) : null
    }
    </>
    
  )
}

export default observer(SelectComponent);

