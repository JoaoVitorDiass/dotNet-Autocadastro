
import Image from 'next/image'

export default function Steps(props) {

    let colorEtapa1 = ""
    let colorEtapa2 = ""
    let colorEtapa3 = ""

    switch(props.etapa) {
        case 1:
            colorEtapa1 = "#47aa4b"
            break

        case 2:
            colorEtapa1 = "#3B82F6"
            colorEtapa2 = "#47aa4b"
            break

        case 3:
            colorEtapa1 = "#3B82F6"
            colorEtapa2 = "#3B82F6"
            colorEtapa3 = "#47aa4b"
            break
    }
    
    return (
        <ol className="flex items-center p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
            <li className="flex items-center" style={{color: colorEtapa1}}>
                <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0" style={{color: colorEtapa1, borderColor: colorEtapa1}}>
                    1
                </span>
                Informar o CPF
                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className="flex items-center" style={{color: colorEtapa2}}>
                <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400" style={{color: colorEtapa2, borderColor: colorEtapa2}}>
                    2
                </span>
                Fornecer dados de identificação
                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className="flex items-center" style={{color: colorEtapa3}}>
                <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400" style={{color: colorEtapa3, borderColor: colorEtapa3}}>
                    3
                </span>
                Inserir o endereço
            </li>
        </ol>


    )
}