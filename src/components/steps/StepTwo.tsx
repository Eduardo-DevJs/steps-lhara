interface StepProps {
  nextStep: () => void;
  previousStep: () => void;
}

export default function StepTwo({ previousStep,nextStep }: StepProps) {
  return (
    <>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="text"
          className="px-4 py-1 outline-none border rounded-sm border-slate-400"
          placeholder="teste@gmail.com.br"

        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Senha
        </label>
        <input
          type="password"
          className="px-4 py-1 outline-none border rounded-sm border-slate-400"
          placeholder="***************"
        />

        <div className="flex items-center justify-around mt-5">
          <button onClick={previousStep} className="bg-orange-500 px-5 py-1 rounded-sm text-white">
            Anterior
          </button>
          <button onClick={nextStep} className="bg-orange-500 px-5 py-1 rounded-sm text-white">
            Proximo
          </button>
        </div>
      </div>
    </>
  );
}
