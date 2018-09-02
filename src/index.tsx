import React from "react";
import ReactDom from "react-dom";
import { program } from "raj-react";
import { makeProgram } from "./hello";

function makeHelloProgram(props: AppProps) {
  return makeProgram(props.initialText);
}

type AppProps = { initialText: string };

class MyProgramComponent extends React.Component<AppProps> {}

const App = program(MyProgramComponent, (props: AppProps) =>
  makeHelloProgram(props)
);

const root = document.getElementById("app");
ReactDom.render(<App initialText="My initial text222" />, root);
