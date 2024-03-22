import { useState } from "react";
import { Calculadora } from "./components/calculadora";
import {data} from "./data/data"
import { Tabela } from "./components/tabela";

export function App() {
const handleCalcImc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,  heigth: string, weigth: string) => {
  e.preventDefault()

  if(!weigth|| !heigth)return

  const numberHeigth = parseFloat(heigth)
    const numberWeigth = parseFloat(weigth)

    const imc = (numberWeigth / numberHeigth**2).toFixed(1)

    setImc(imc)

    data.forEach((item) => {
      if(parseFloat(imc) >= item.min && parseFloat(imc) <= item.max){
        setInfo(item.info)
        setInfoClass(item.InfoClass)
      }
      if(!info)return
    })
    
}

const resetCalc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
  e.preventDefault()
  setImc("")
  setInfo("")
  setInfoClass("")
}

const [imc, setImc] = useState("")
const [info, setInfo] = useState("")
const [infoClass, setInfoClass] = useState("")

  return (
    <div> 
      {!imc ? (<Calculadora handleCalcImc={handleCalcImc}/>) : (<Tabela data={data} imc={imc} info={info} infoClass={infoClass}  resetCalc={resetCalc}/>)}
    </div>
  )
}

