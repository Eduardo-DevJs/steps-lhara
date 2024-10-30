import { useState } from "react";

import StepTwo from "./components/steps/StepTwo";
import StepOne from "./components/steps/StepOne";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function previousStep() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className="h-screen bg-slate-300 flex items-center justify-center">
      <div className="p-10 rounded-md bg-white flex flex-col gap-3">
        <div className="flex items-center justify-center gap-5">
          {/* Bolinha do passo 1 */}
          <div>
            <p
              className={
                currentStep === 0
                  ? "w-10 p-2 bg-red-700 rounded-full text-center text-white h-10"
                  : "w-10 p-2 rounded-full text-center text-white bg-green-500"
              }
            >
              01
            </p>
          </div>
          {/* Bolinha do passo 2 */}
          <div>
            <p
              className={
                currentStep === 1
                  ? "w-10 p-2 bg-red-700 rounded-full text-center text-white h-10"
                  : "w-10 p-2 rounded-full text-center text-white bg-green-500"
              }
            >
              02
            </p>
          </div>
        </div>
        
        {/* Componentes dos passos */}
        {currentStep === 0 && <StepOne nextStep={nextStep} />}
        {currentStep === 1 && <StepTwo previousStep={previousStep} nextStep={nextStep} />}
      </div>
    </div>
  );
}
