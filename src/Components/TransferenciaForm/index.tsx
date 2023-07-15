import React, { useState } from 'react';
import { Container, Group, Button, Input, Label } from './style';

interface TransferenciaFormProps {
  onSubmit: (filtroPeriodoInicio: string, filtroPeriodoFim: string, filtroNomeOperador: string) => void;
}

const TransferenciaForm: React.FC<TransferenciaFormProps> = ({ onSubmit }) => {
  const [filtroPeriodoInicio, setFiltroPeriodoInicio] = useState('');
  const [filtroPeriodoFim, setFiltroPeriodoFim] = useState('');
  const [filtroNomeOperador, setFiltroNomeOperador] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    onSubmit(filtroPeriodoInicio, filtroPeriodoFim, filtroNomeOperador);
  };
  
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Group>
          <Label>Período de Início:</Label>
          <Input
            type="text"
            value={filtroPeriodoInicio}
            onChange={(event) => setFiltroPeriodoInicio(event.target.value)}
            placeholder="dd/MM/yyyy"
          />
        </Group>

        <Group>
          <Label>Período de Fim:</Label>
          <Input
            type="text"
            value={filtroPeriodoFim}
            onChange={(event) => setFiltroPeriodoFim(event.target.value)}
            placeholder="dd/MM/yyyy"
          />
        </Group>

        <Group>
          <Label>Nome do Operador:</Label>
          <Input
            type="text"
            value={filtroNomeOperador}
            onChange={(event) => setFiltroNomeOperador(event.target.value)}
          />
        </Group>

        <Button type="submit">Buscar</Button>
      </form>
    </Container>
  );
};

export default TransferenciaForm;