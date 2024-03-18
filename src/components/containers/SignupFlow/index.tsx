import { useState } from "react";
import { ControlledFlow, Button } from "../..";

const StepOne = ({ onNext }: any) => {
  return (
    <div>
      <p>StepOne</p>
      <Button onClick={() => onNext({ data: "StepOne" })}>Next</Button>
    </div>
  );
};

const StepTwo = ({ onNext }: any) => {
  return (
    <div>
      <p>StepTwo</p>
      <Button onClick={() => onNext({ data: "StepTwo" })}>Next</Button>
    </div>
  );
};

const StepThree = ({ onNext }: any) => {
  return (
    <div>
      <p>StepThree</p>
      <Button onClick={() => onNext({ data: "StepThree" })}>Next</Button>
    </div>
  );
};

const SignupFlow = () => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isDone, setDone] = useState(false);

  const onNext = (dataFromStep: any) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  if (isDone) {
    return <div>DONE!</div>;
  }

  return (
    <ControlledFlow
      currentIndex={currentStepIndex}
      onDone={() => setDone(true)}
      onNext={onNext}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </ControlledFlow>
  );
};

export default SignupFlow;
