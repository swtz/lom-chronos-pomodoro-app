self.onmessage = function (event) {
  console.log('WORKER RECEBEU:', event.data);

  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Sim, posso fazer um favor');
      break;
    }
    case 'FALA_OI': {
      self.postMessage('OK: Oi!');
      break;
    }
    case 'FECHAR': {
      self.postMessage('Tá bom, vou fechar');
      self.close();
      break;
    }
    default:
      self.postMessage('Não entendi');
  }
};
