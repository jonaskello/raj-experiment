import { ReactProgram } from "raj-react";
import { view } from "./counter-view";
import { update } from "./counter-state";

export const program: ReactProgram = {
  update,
  view
};
