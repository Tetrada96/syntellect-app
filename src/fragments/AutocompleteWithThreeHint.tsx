import React from "react";
import { Autocomplete } from "./Autocomplete";

import { store1 } from '../store/store';


export const AutocompleteWithThreeHint = () => {
    return <Autocomplete store={store1} countVariants={3} nameStore={'store1'} />
}