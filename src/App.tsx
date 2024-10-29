import { useState } from "react";
import StepOne from "./components/steps/stepOne";
import StepTwo from "./components/steps/StepTwo";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStep() {
    setCurrentStep((prev) => prev + 1);
  }

  function previousStep() {
    setCurrentStep((prev) => prev - 1);
  }

  return (
    <div className="h-screen bg-slate-300 flex items-center justify-center">
      <div className="p-10 rounded-md bg-white flex flex-col gap-3">
      {currentStep === 0 && <StepOne nextStep={nextStep} />}
      {currentStep === 1 && <StepTwo previousStep={previousStep} nextStep={nextStep} />}
      </div>
    </div>
  );
}
