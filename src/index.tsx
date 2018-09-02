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

type Message = string;

function makeHelloProgram(
  props: AppProps
): Program<State, Message, React.ReactNode> {
  return {
    init: [{ text: props.initialText }],
    update(message: any, model: State) {
      return [{ text: message }] as any;
    },
    view(model: State, dispatch: Dispatch<Message>): JSX.Element {
      return (
        <p>
          <button onClick={() => dispatch("Clicked")}>Click me</button>
          {model.text}
        </p>
      );
    }
  };
}

type AppProps = { initialText: string };

class MyProgramComponent extends React.Component<AppProps> {}

const App = program(MyProgramComponent, (props: AppProps) =>
  makeHelloProgram(props)
);
const root = document.getElementById("app");
ReactDom.render(<App initialText="My initial text222" />, root);
