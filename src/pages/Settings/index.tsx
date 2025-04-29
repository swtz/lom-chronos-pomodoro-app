import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../hooks/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  useEffect(() => {
    document.title = 'Settings — Chronos Pomodoro';
  }, []);

  const { state, dispatch } = useTaskContext();

  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    const workTimeLimit = workTime < 1 || workTime > 60;
    const shortBreakTimeLimit = shortBreakTime < 1 || shortBreakTime > 60;
    const longBreakTimeLimit = longBreakTime < 1 || longBreakTime > 60;

    const errorMessages = [];

    if (!workTime || !shortBreakTime || !longBreakTime) {
      errorMessages.push('Não é possível enviar um formulário vazio.');
    }

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      errorMessages.push('Por favor, digite apenas números nos campos abaixo.');
    }

    if (workTimeLimit || shortBreakTimeLimit || longBreakTimeLimit) {
      errorMessages.push(
        'Por favor, digite apenas números de 1 a 60 nos campos abaixo.',
      );
    }

    if (errorMessages.length > 0) {
      errorMessages.forEach(error => showMessage.error(error));
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });

    showMessage.success('O tempo das tarefas foi atualizado');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações de tempo'
              title='Salvar configurações de tempo'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
