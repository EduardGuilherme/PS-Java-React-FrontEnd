import React from 'react';
import {ContainerList,ItemList} from './style';

interface ListTransferenciaProps {
    transferencias:any[];
};

const TransferenciaList:React.FC<ListTransferenciaProps> = ({ transferencias }) => {
    return(
        <ContainerList>
            {transferencias.map((transferencias:any) =>(
                <ItemList key={transferencias.id}>
                    <div>
                        <p>Data: {transferencias.dataTransferencia}</p>
                        <p>Valor: {transferencias.valor}</p>
                        <p>Tipo: {transferencias.tipo}</p>
                    </div>
                    <div>
                        <p>Operador: {transferencias.nomeOperadorTransacao}</p>
                        <p>Conta: {transferencias.conta.nomeResponsavel}</p>
                    </div>
                </ItemList>
            ))}
        </ContainerList>
    )
    
}

export default TransferenciaList;