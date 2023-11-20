"use client"

import LoadingIndicator from "@/app/components/loadingIndicador/LoadingIndicator"
import { useEffect, useState } from "react"

export default function Etapa3({etapa, atualizarEtapa}) {

    const [stateModal, setStateModal] = useState(false)

    const [stateCep, setStateCep] = useState({
        value: "",
        erro: false
    })

    const handleCep = (event) => {
        setStateCep({
            ...stateCep,
            value: event.target.value
        })
    }

    useEffect(() => {
        let cep = stateCep.value.replace(/\D/g, '').substring(0,8);

        // Aplica a máscara
        if (cep.length > 5) {
            cep = cep.replace(/^(\d{5})(\d{1,3})/, '$1-$2');
        }
    
        setStateCep({
            ...stateCep,
            value: cep
        })
    }, [stateCep.value]);

    const validaCampos = () => {

        setStateCep({
            ...stateCep,
            erro: stateCep.value == ""
        })

        if(stateCep.erro) {
            setStateModal(true)
        }
    }

    return(
        <div className="w-2/3 m-auto border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
            <form className="space-y-6">
                <h5 className="text-xl font-medium text-white">Endereço</h5>
                
                <div className=" w-full flex justify-between ">

                    <div className="w-2/6 mr-5">
                        <label for="CEP" className="block mb-2 text-sm font-medium text-white">
                            CEP&nbsp;
                            <span className="text-blue-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="CEP"
                            id="nomeCompleto"
                            value={stateCep.value}
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                            placeholder="99999-999"
                            onInput={handleCep}
                        ></input>
                        <span
                            id="erroNomeCompleto"
                            className="text-xs text-red-500 p-2"
                            style={!stateCep.erro ? {display: "none"} : null}
                        >
                            Este campo deve ser preenchido!
                        </span>
                    </div>

                    <div className="w-3/6 mr-5">
                        <label for="logradouro" className="block mb-2 text-sm font-medium text-white">
                            Logradouro
                        </label>
                        <input
                            type="text"
                            name="logradouro"
                            id="logradouro"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                            placeholder="Nome da Rua, Avenida ..."
                        ></input>
                    </div>

                    <div className="w-1/6 ">
                        <label for="numero" className="block mb-2 text-sm font-medium text-white">
                            Número
                        </label>
                        <input
                            type="number"
                            name="numero"
                            id="numero"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                            placeholder="999"
                        ></input>
                    </div>

                </div>

                <div className="w-full">
                    <label for="bairro" className="block mb-2 text-sm font-medium text-white">
                        Bairro
                    </label>
                    <input
                        type="text"
                        name="bairro"
                        id="bairro"
                        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                        placeholder="Bairro"
                    ></input>
                </div>

                <div className=" w-full flex justify-between ">

                    <div className="w-2/6 mr-5">
                        <label for="uf" className="block mb-2 text-sm font-medium text-white">
                            UF
                        </label>
                        <select
                            name="bairro"
                            id="bairro"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                        >
                            <option value="" selected>UF</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                        </select>
                    </div>

                    <div className="w-4/6">
                        <label for="cidadae" className="block mb-2 text-sm font-medium text-white">
                            Cidade
                        </label>
                        <input
                            type="text"
                            name="cidade"
                            id="cidade"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                            placeholder="Cidade"
                        ></input>
                    </div>
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
                    Finalizar
                </button>
                {/* <!-- Modal toggle --> */}

            </div>


            <div id="default-modal" tabindex="-1" aria-hidden="true" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen"
                style={!stateModal ? {display: "none"} : null}>
                <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Cadastro realizado com sucesso!
                            </h3>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam soluta, ullam laborum iure atque dolorum labore dolorem asperiores, sunt libero sint aliquam quaerat unde necessitatibus vero nostrum eos officia.
                            </p>
                            
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => atualizarEtapa(1)}>Inicio</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
