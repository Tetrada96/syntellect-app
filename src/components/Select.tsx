import { inject, observer } from 'mobx-react';
import React from 'react';
import { toJS} from 'mobx'; 

import { CountryInfo } from '../api/apiService';

export const Render = ({array}: any) => {
    console.log(array.fullName)
    // return props.map((item: any) => {return <div>{item?.name}</div>})
    return <div></div>
}

export const Select = observer(({store}: {store: any}) => (
    <Render
    array={toJS(store.countries)}
    />
  ));
