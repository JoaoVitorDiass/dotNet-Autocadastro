"use client"

import { useEffect, useState } from "react"

export default function Etapa1({etapa, atualizarEtapa}) {

  const [cpf, setCpf] = useState('');
  
  const [buttonDisable, setButtonDisable ] = useState(true)

  useEffect(() => {
    // Remove caracteres não numéricos
    const formattedCpf = cpf.replace(/\D/g, '').substring(0,11);
    
    // Adiciona a máscara
    const maskedCpf = formattedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    // Atualiza o estado do CPF com a máscara
    setCpf(maskedCpf);
    setButtonDisable(maskedCpf.length != 14);

  }, [cpf]);

  const handleInputChange = (event) => {
    // Atualiza o estado do CPF com o valor do input
    setCpf(event.target.value);
  };

  const styleButtonDisable = () => {
    if(buttonDisable) {
      return {backgroundColor: "#4B5563", cursor: "not-allowed"}
    }
  }

  return(
    <div className="w-2/3 m-auto border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
      <form className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Informar o CPF:</h5>
          <div>
              <label for="cpf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                CPF&nbsp;
                <span className="text-blue-500">*</span></label>
              <input type="text" name="cpf" id="cpf" value={cpf} className="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="123.456.789-00" onInput={handleInputChange}></input>
          </div>
          <div className="text-sm text-white">
            Campos marcados com <span className="text-blue-500">*</span> são obrigatórios.
          </div>
          <br />
      </form>
      <button
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={ () => atualizarEtapa(etapa+1)}
        disabled={buttonDisable}
        style={styleButtonDisable()}
      >
        Avançar
      </button>
    </div>
  )
}

