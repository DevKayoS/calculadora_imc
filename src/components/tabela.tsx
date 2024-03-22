import { Button } from "./button"


interface TabelaProps{
  data: string[]
  imc: string,
  info: string,
  infoClass: string,
  resetCalc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Tabela({data, imc, info, infoClass, resetCalc}: TabelaProps) {
 
  return(
    <div className="flex flex-col items-center text-lg p-10 mt-20 bg-zinc-950/60 text-slate-50 max-w-[800px] m-auto  space-y-2 rounded-md  shadow-lg shadow-black ">
      <p className="font-bold text-3xl">Seu IMC: <span className={infoClass}> {imc} </span> </p>
      <p className="text-2xl">Situação Atual: <span className={infoClass}> {info} </span></p>
      <h3 className="font-bold text-2xl">Confira as classificações: </h3>
      <div className="w-full">
        <div className="border-b-2 space-y-2 flex items-center justify-between p-4">
          <h4 className="max-w-20">IMC: </h4>
          <h4 className="max-w-20">Classificação: </h4>
          <h4 className="max-w-20">Obesidade: </h4>
        </div>
        {data.map((item) => (
          <div className="border-b-2 flex justify-between p-2" key={item.info}>
            <p className="max-w-20">{item.classifiction}</p>
            <p className="max-w-20">{item.info}</p>
            <p className="max-w-20">{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button action={resetCalc} className="text-xl mt-5 w-1/2 m-auto rounded-lg p-2 bg-slate-50 text-black hover:bg-slate-400" text="Voltar"></Button> 
    </div>
  )

}