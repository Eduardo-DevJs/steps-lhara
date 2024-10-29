interface StepProps {
  nextStep: () => void;
}

export default function StepOne({ nextStep }: StepProps) {
  return (
    <>
      <div>
        <label htmlFor="email" className="block mb-2">
          Nome
        </label>
        <input
          type="text"
          placeholder="Ex: Lhara"
          className="px-4 py-1 outline-none border rounded-sm border-slate-400"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Sobrenome
        </label>
        <input
          type="text"
          placeholder="Santos"
          className="px-4 py-1 outline-none border rounded-sm border-slate-400"
        />

        <div className="flex items-center justify-around mt-5">
          <button className="bg-orange-500 px-5 py-1 rounded-sm text-white">
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
