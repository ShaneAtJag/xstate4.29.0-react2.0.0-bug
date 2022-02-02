import { createMachine } from "xstate";

type State = {
  value: "initial";
  context: undefined;
};

export const testMachine = createMachine<any, any, State>({
  id: "testMachine",
  initial: "initial",
  states: {
    initial: {},
  },
});
