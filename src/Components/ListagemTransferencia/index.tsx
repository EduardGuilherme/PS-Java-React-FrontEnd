import React, { useEffect, useState } from 'react';
import { ListagemContainer,Title } from './style';
import axios from 'axios';

import TransferenciaForm from '../TransferenciaForm';
import TransferenciaList from '../TransferenciaList';

interface ITransferencia {
    id: number;
    dataTransferencia: string;
    valor: number;
    tipo: string;
    nomeOperadorTransacao: string;
    conta: {
      id: number;
      nomeResponsavel: string;
    };
  }

const searchTransferencias = async (
    filtroPeriodoInicio?: string,
    filtroPeriodoFim?: string,
    filtroNomeOperador?: string
  ) =>{
    try{
        const response = await axios.get('http://localhost:8080/transferencia/buscardados', {
            params: {
                inicio: filtroPeriodoInicio,
                fim: filtroPeriodoFim,
                nomeOperadorTransacao: filtroNomeOperador,
            },
        });

        const transferencias: ITransferencia[] = response.data;
        console.log("resultado da Api"+transferencias);
        return transferencias;
    }catch (error) {
        console.error(error);
        throw new Error('Ocorreu um erro ao buscar as transferências.');
      }
  }

const TransferenciaListagem: React.FC = () => {
    const[transferencias, setTransferencias] = useState<ITransferencia[]>([]);
    //const[]

    const handleSubmit = async(
        filtroPeriodoInicio: string,
        filtroPeriodoFim: string,
        filtroNomeOperador: string
      ) => {
        try{
            const result = await searchTransferencias(filtroPeriodoInicio, filtroPeriodoFim, filtroNomeOperador);
            setTransferencias(result);
        }catch(error){
            console.log(error);
        }
        
    };

    useEffect(() => {
        searchTransferencias().then((result) => {
          setTransferencias(result);
        });
      }, []);
    return(
        <ListagemContainer>
            <Title>Listagem de Transferências</Title>
            <TransferenciaForm onSubmit={handleSubmit}/>
            <TransferenciaList transferencias={transferencias}/>
        </ListagemContainer>
    )
}

export default TransferenciaListagem;