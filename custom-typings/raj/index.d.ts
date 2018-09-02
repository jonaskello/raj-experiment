export type Change = [any, any?];

export interface Update {
  (message: any, state: any): Change;
}

export interface View {
  (state: any, dispatch: Dispatch): any;
}

export interface Dispatch {
  (message?: any): void;
}

export interface Done {
  (state: any): void;
}

export interface Program {
  readonly init?: Change;
  readonly update: Update;
  readonly view: View;
  readonly done?: Done;
}

export function runtime(program: Program): void;
