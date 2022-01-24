import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';
import ValidaCPF from './modules/ValidaCPF';

// Gerador de CPF
(function() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  const geraBtn = document.querySelector('.btn-gerar')

  cpfGerado.innerHTML = gera.geraNovoCpf();

  document.addEventListener('click', event => {
    event.preventDefault()
    const target = event.target

    if(target == geraBtn){
      cpfGerado.innerHTML = gera.geraNovoCpf();
    }  
  })
})();

// Validador de CPF
(function() {
  const input = document.querySelector('#valida-cpf')
  const btnValida = document.querySelector('#btn-valida-cpf')
  const resultado = document.querySelector('#valida-resultado')

  document.addEventListener('click', event => {
    const valida = new ValidaCPF(input.value)
    const target = event.target

    if(target == btnValida){
      if(valida.éSequência()){
        return resultado.innerHTML = `CPF inválido, não é permitido sequências!`
      }

      if(valida.cpfLimpo.length !== 11) {
        return resultado.innerHTML = 'Ops, você precisa seguir o formato XXX.XXX.XXX-XX'
      }

      if(valida.valida()){
        return resultado.innerHTML = 'CPF é Válido!'
      } else {
        return resultado.innerHTML = 'CPF inválido!'
      }
    }
  })
})()
