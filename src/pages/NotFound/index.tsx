import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada — Chronos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>Essa página não existe.</Heading>
          <p style={{ textAlign: 'center' }}>
            Clique no primeiro botão para voltar à tela inicial.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
