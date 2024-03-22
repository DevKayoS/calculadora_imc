import { Button } from "./button";
import {useState} from "react"

interface CalculadoraProps {
  handleCalcImc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, heigth: string, weigth: string) => void
}

export function Calculadora({handleCalcImc}: CalculadoraProps) {
  const [heigth, setHeigth] = useState("")
  const [weigth, setWeigth] = useState("")

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setHeigth("")
    setWeigth("")
  }


  return(
      <div className="flex flex-col items-center p-10 mt-20 bg-zinc-950/60 text-slate-50 w-96 m-auto   rounded-md space-y-8 shadow-md shadow-black ">
      <h1 className="text-3xl font-bold">Calculadora IMC</h1>
      <form className="w-full flex flex-col space-y-5 " id="imcCalc">
        <div className="">
          <p className="text-2xl">Altura:</p>
          <input 
          type="number" 
          value={heigth}
          onChange={(e) => setHeigth(e.target.value)}
          className="p-5 rounded-md outline-none w-full text-black"
          placeholder="Exemplo: 1,70" />
        </div>
        <div>
          <p className="text-2xl mt-5">Peso: </p>
          <input 
          type="number" 
          value={weigth}
          onChange={(e) => setWeigth(e.target.value)}
          className="p-5 rounded-md outline-none w-full text-black" 
          placeholder="Exemplo: 70,2" 
          />
        </div>
        <div className="flex gap-3">
          <Button action={(e) => handleCalcImc(e,heigth, weigth)} className="text-xl  w-1/2 m-auto rounded-lg p-2 bg-slate-50 text-black hover:bg-zinc-400"  text="Calcular"></Button>
          <Button action={handleReset} className="text-xl  w-1/2 m-auto rounded-lg p-2 bg-red-500 hover:bg-red-900 " text="Limpar"></Button>
        </div>
      </form>
    </div>
  )
}