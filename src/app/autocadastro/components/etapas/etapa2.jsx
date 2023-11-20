"use client"

import { useEffect, useState } from "react"

export default function Etapa2({etapa, atualizarEtapa}) {

    const [ stateNomeCompleto, setStateNomeCompleto ] = useState({
        value: "",
        erro: false
    });

    const [ stateDtnasc, setStateDtnasc ] = useState({
        value: "",
        erro: false
    });

    const [ stateCelular, setStateCelular ] = useState({
        value: "",
        erro: false
    });

    const handleNomeCompleto = (event) => {
        setStateNomeCompleto({
            ...stateNomeCompleto,
            value: event.target.value
        })
    }

    const handleDtnasc = (event) => {
        setStateDtnasc({
            ...stateDtnasc,
            value: event.target.value
        })
    }

    const handleCelular = (event) => {
        setStateCelular({
            ...stateCelular,
            value: event.target.value
        })
    }

    const validaCampos = () => {

        let flag = false
        
        if( stateNomeCompleto.value == "" ||
            stateDtnasc.value       == "" ||
            stateCelular.value      == ""    ) {

            flag = true
        }
        
        setStateNomeCompleto({
            ...stateNomeCompleto,
            erro: stateNomeCompleto.value == ""
        })
        setStateDtnasc({
            ...stateDtnasc,
            erro: stateDtnasc.value == ""
        })
        setStateCelular({
            ...stateCelular,
            erro: stateCelular.value == ""
        })

        if(!flag) {
            atualizarEtapa(etapa+1)
        }
    }

    useEffect(() => {
        let phoneValue = stateCelular.value;
    
        // Remove caracteres não numéricos da string
        phoneValue = phoneValue.replace(/\D/g, '');
        
        // Aplica a máscara
        if (phoneValue.length <= 10) {
            phoneValue = phoneValue.replace(/^(\d{2})(\d{1,5})/, '($1) $2');
        } else {
            phoneValue = phoneValue.replace(/^(\d{2})(\d{1,5})(\d{1,4}).*/, '($1) $2-$3');
        }

        // Atualiza o estado com o número formatado
        setStateCelular({
            ...stateCelular,
            value: phoneValue
        })
    
    }, [stateCelular.value]);

    return(
        <div className="w-2/3 m-auto border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <form className="space-y-6">
                <h5 class="text-xl font-medium text-white">Dados de identificação</h5>
                
                <div>
                    <label for="nomeCompleto" class="block mb-2 text-sm font-medium text-white">
                        Nome Completo&nbsp;
                        <span className="text-blue-500">*</span>
                    </label>
                    <input 
                        type="nomeCompleto" 
                        name="nomeCompleto" 
                        id="nomeCompleto" 
                        class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" 
                        placeholder="Seu nome completo"
                        value={stateNomeCompleto.value}
                        onInput={handleNomeCompleto}
                    ></input>
                    <span 
                        id="erroNomeCompleto"
                        className="text-xs text-red-500 p-2"
                        style={!stateNomeCompleto.erro ? {display: "none"}: null}
                    >
                        Este campo deve ser preenchido!
                    </span>
                </div>
                
                <div>
                    <label for="dtnasc" class="block mb-2 text-sm font-medium text-white">
                        Data de Nascimento&nbsp;
                        <span className="text-blue-500">*</span>
                    </label>
                    <input 
                        type="date"
                        name="dtnasc" 
                        id="dtnasc" 
                        class="text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                        value={stateDtnasc.value}
                        onInput={handleDtnasc}
                    ></input>
                    <span
                        id="erroDtnasc"
                        className="text-xs text-red-500 p-2"
                        style={!stateDtnasc.erro ? {display: "none"}: null}
                    >
                        Este campo deve ser preenchido!
                    </span>
                </div>

                <div>
                    <label for="celular" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Celular&nbsp;
                        <span className="text-blue-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        name="celular" 
                        id="celular" 
                        placeholder="(99) 99999-9999" 
                        class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                        value={stateCelular.value}
                        onInput={handleCelular}
                    ></input>
                    <span
                        id="erroCelular"
                        className="text-xs text-red-500 p-2"
                        style={!stateCelular.erro ? {display: "none"}: null}
                    >
                        Este campo deve ser preenchido!
                    </span>
                </div>

                <div className="text-sm text-white">
                    Campos marcados com <span className="text-blue-500">*</span> são obrigatórios.
                </div>
                <br />
            </form>
            <div className="flex justify-evenly items-center">
                <button
                    className="w-[40%] text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-500  bg-gray-500"
                    onClick={ () => atualizarEtapa(etapa-1)}
                >
                    Retornar
                </button>
                <button
                    className="w-[40%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={ () => validaCampos()}
                >
                    Avançar
                </button>
            </div>
        </div>
    )
}
