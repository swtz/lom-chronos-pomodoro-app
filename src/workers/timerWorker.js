let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  // secondsRemaining é convertido de segundos para milissegundos
  // endDate é a soma dos milissegundos iniciais mais os milissegundos definido pelo usuário
  const endDate = activeTask.startDate + secondsRemaining * 1000;
  // garantido que valor não comece com 1 segundo a menos
  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    // obtém-se os segundos restantes a cada chamada da função
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000); // esse loop será controlado no 'Worker' do componente
  }
  tick();
};
