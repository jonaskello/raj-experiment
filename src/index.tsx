import React from "react";
import ReactDom from "react-dom";
import { program } from "raj-react";
// import { makeProgram } from "./hello";
import { makeProgram } from "./main";

interface AppProps {
  readonly greeting: string;
}

function makeMainProgram(props: AppProps) {
  return makeProgram(props.greeting);
}

class AppComponent extends React.Component<AppProps> {}

const App = program(AppComponent, (props: AppProps) => makeMainProgram(props));

const root = document.getElementById("app");
ReactDom.render(<App greeting="My initial text" />, root);
