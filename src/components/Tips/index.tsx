import { useTaskContext } from '../../hooks/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenNoActiveTask = {
    workTime: (
      <span>
        Nesse ciclo foque por <strong>{state.config.workTime}min.</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        Nesse ciclo descanse por{' '}
        <strong>{state.config.shortBreakTime}min.</strong>
      </span>
    ),
    longBreakTime: (
      <span>
        Nesse ciclo descanse por{' '}
        <strong>{state.config.longBreakTime}min.</strong>
      </span>
    ),
  };

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min.</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <b>{state.config.longBreakTime}min.</b>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForWhenNoActiveTask[nextCycleType]}
    </>
  );
}
