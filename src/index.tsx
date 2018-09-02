import React from "react";
import ReactDom from "react-dom";
import { program } from "raj-react";
import { Dispatch, Program } from "raj";
import { view } from "./hello/view";
import { update, State, initialState } from "./hello/state";
import { Action } from "./hello/actions";

function makeHelloProgram(
  props: AppProps
): Program<State, Action, React.ReactNode> {
  return {
    init: [initialState(props.initialText)],
    update,
    view
  };
}

type AppProps = { initialText: string };

class MyProgramComponent extends React.Component<AppProps> {}

const App = program(MyProgramComponent, (props: AppProps) =>
  makeHelloProgram(props)
);
const root = document.getElementById("app");
ReactDom.render(<App initialText="My initial text222" />, root);
