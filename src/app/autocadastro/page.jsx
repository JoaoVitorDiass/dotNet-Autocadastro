"use client"
import { useState } from "react"
import Steps from './components/steps/page'
import Etapa1 from './components/etapas/etapa1'
import Etapa2 from './components/etapas/etapa2'

export default function Autocadastro() {

    const [etapa, setEtapa] = useState(1)

    const atualizarEtapa = (novoValor) => {
        setEtapa(novoValor);
    };

    const verificaEtapa = () => {

        let retorno = null;

        switch(etapa) {
            case 1:
                retorno = <Etapa1 etapa={etapa} atualizarEtapa={atualizarEtapa} ></Etapa1>
                break
                
            case 2:
                retorno = <Etapa2 etapa={etapa} atualizarEtapa={atualizarEtapa} ></Etapa2>
                break 

            case 3:
                break 
        }

        return retorno
    }

    return (
        <div className='dark:bg-gray-900 h-screen'> 
            <nav className="w-full h-[6vw] border-b border-gray-600 text-blue-500 text-3xl font-bold flex items-center">
                &nbsp;&nbsp;
                Auto Cadastro
            </nav>
            <main className='w-full' style={{height: "calc(100% - 6vw)"}}> 
                <aside className='h-[12%] w-full flex items-center justify-center pt-7'>
                    <Steps etapa={etapa}></Steps>
                </aside>
                <section className='h-[88%] w-full pt-12'>
                    {verificaEtapa()}
                </section>
            </main>
        </div>
    )
}