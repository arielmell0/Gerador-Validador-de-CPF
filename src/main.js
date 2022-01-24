import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  const geraBtn = document.querySelector('.btn-gerar')

  document.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target

    if(target == geraBtn){
      cpfGerado.innerHTML = gera.geraNovoCpf();
    }  
  })
})();
