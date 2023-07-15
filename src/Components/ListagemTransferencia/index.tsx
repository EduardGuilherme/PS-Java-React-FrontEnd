import React, { useEffect, useState } from 'react';
import { ListagemContainer, Title } from './style';
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
const formatDateToBackend = (dateString: string) => {
  if (!dateString) return '';

  const [day, month, year] = dateString.split('/');
  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

const TransferenciaListagem: React.FC = () => {
  const [transferencias, setTransferencias] = useState<ITransferencia[]>([]);

  const searchTransferencias = async (
    filtroPeriodoInicio?: string,
    filtroPeriodoFim?: string,
    filtroNomeOperador?: string
  ) => {
    try {
      const params: any = {}; 

      if (filtroPeriodoInicio) {
        params.inicio = formatDateToBackend(filtroPeriodoInicio);
      }

      if (filtroPeriodoFim) {
        params.fim = formatDateToBackend(filtroPeriodoFim);
      }

      if (filtroNomeOperador) {
        params.nomeOperadorTransacao = filtroNomeOperador;
      }

      const queryString = Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
      
    const url = `http://localhost:8080/transferencia/buscardados?${queryString}`;

    const response = await axios.get(url);

      const transferencias: ITransferencia[] = response.data;
      console.log("Resultado: " + transferencias);
      return transferencias;
    } catch (error) {
      console.error(error);
      throw new Error('Ocorreu um erro ao buscar as transferências.');
    }
  };

  const handleSubmit = async (
    filtroPeriodoInicio: string,
    filtroPeriodoFim: string,
    filtroNomeOperador: string
  ) => {
    try {
      const result = await searchTransferencias(filtroPeriodoInicio, filtroPeriodoFim, filtroNomeOperador);
      setTransferencias(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchTransferencias().then((result) => {
      setTransferencias(result);
    });
  }, []);

  return (
    <ListagemContainer>
      <Title>Listagem de Transferências</Title>
      <TransferenciaForm onSubmit={handleSubmit} />
      <TransferenciaList transferencias={transferencias} />
    </ListagemContainer>
  );
}

export default TransferenciaListagem;
