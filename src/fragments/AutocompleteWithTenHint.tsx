import React from "react";
import { Autocomplete } from "./Autocomplete";

import { store2 } from '../store/store';


export const AutocompleteWithTenHint = () => {
    return <Autocomplete store={store2} countVariants={10} nameStore={'store2'} />
}