import React from "react";
import "./App.css";
import { AutoComplete } from "./fragments/AutoComplete";
import { InputWithAlertButtons } from "./fragments/InputWithAlertButtons";
import { InputWithClear } from "./fragments/InputWithClear";


const App =() => (
    <div>
      <InputWithClear />
      <InputWithAlertButtons />
      <AutoComplete />
    </div>
)

export default App;
