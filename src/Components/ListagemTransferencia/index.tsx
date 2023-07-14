import React, { useEffect, useState } from 'react';
import { ListagemContainer,Title } from './style';

import TransferenciaForm from '../TransferenciaForm';


const TransferenciaListagem: React.FC = () => {
    const handleSubmit =(
        filtroPeriodoInicio: string,
        filtroPeriodoFim: string,
        filtroNomeOperador: string
      ) => {
        console.log();
    };
    return(
        <ListagemContainer>
            <Title>Listagem de Transferências</Title>
            <TransferenciaForm onSubmit={handleSubmit}/>
        </ListagemContainer>
    )
}

export default TransferenciaListagem;