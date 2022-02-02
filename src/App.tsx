import { useMachine } from "@xstate/react";
import { testMachine } from "./machines/test-machine";

export const App = (): JSX.Element => {
  const [testState, testSend] = useMachine(testMachine);

  console.log(testState.matches("this_state_does_not_exist"));

  return <div className="App">Hello, World!</div>;
};
