import React from "react";
import "./App.css";
import { AutocompleteWithThreeHint } from "./fragments/AutocompleteWithThreeHint";
import { AutocompleteWithTenHint } from "./fragments/AutocompleteWithTenHint";
import { InputWithAlertButtons } from "./fragments/InputWithAlertButtons";
import { InputWithClear } from "./fragments/InputWithClear";


const App =() => (
    <div>
      <InputWithClear />
      <InputWithAlertButtons />
      <AutocompleteWithThreeHint  />
      <AutocompleteWithTenHint  />
    </div>
)

export default App;
