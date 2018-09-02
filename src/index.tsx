// import { runtime, Dispatch } from "raj";

// type State = number;

// runtime({
//   init: [0], // State is an integer to count
//   update(_message: {}, state: State) {
//     return [state + 1]; // Increment the state
//   },
//   view(state: State, dispatch: Dispatch<{}>) {
//     const keepCounting = window.confirm(`Count is ${state}. Increment?`);
//     if (keepCounting) {
//       dispatch();
//     }
//   }
// });

import React from "react";
import ReactDom from "react-dom";
import { program } from "raj-react";
import { Dispatch, Program } from "raj";

interface State {
  readonly text: string;
}

const helloProgram: Program<State, {}, any> = {
  init: [{ text: "Hello" }],
  update(_message: any, model: State) {
    return [{ text: "world" }] as any;
  },
  view(model: State, dispatch: Dispatch<State>) {
    return (
      <p>
        <button onClick={() => dispatch()}>Click me</button>
        {model.text}
      </p>
    );
  }
};

const App = program(React.Component, (_props: any) => helloProgram);
const root = document.getElementById("app");
ReactDom.render(<App />, root);
