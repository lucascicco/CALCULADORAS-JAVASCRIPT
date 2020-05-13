"use strict";

function WorkingWithDataBaseToDate() {
  var datainicial = document.querySelector('[name=datainicial]');
  var datafinal = document.querySelector('[name=datafinal]');
  var x = datainicial.value;
  var y = datafinal.value;

  if (datainicial.value.length > 0 && datafinal.value.length > 0) {
    var datainicialx = new Date(x);
    var datafinaly = new Date(y);

    if (datafinaly > datainicialx) {
      var result = (datafinaly.getTime() - datainicialx.getTime()) / (1000 * 60 * 60 * 24);
      document.getElementById('cloack').innerHTML = "<p> Falta(m) </br> ".concat(result, " dia(s) </br> </p>");
    } else {
      alert('Data final menor ou igual que a data inicial!');
    }
  } else {
    alert('Preencha os campos corretamente !');
  }
}

function WorkingWithCurrentDate() {
  var DataEventDOM = document.querySelector('[name=dataevento]');
  var DataEvent = DataEventDOM.value;
  var ConometroDOM = document.getElementById('contagemregressiva');
  var DataCurrent = new Date();

  if (DataEvent.length > 0) {
    var DataEventX = new Date(DataEvent);
    DataEventX.setHours(0);
    DataEventX.setDate(DataEventX.getDate() + 1);
    console.log(DataEventX);

    if (DataEventX > DataCurrent) {
      setInterval(function () {
        var DataCurrent = new Date();
        var x = DataEventX.getTime() - DataCurrent.getTime();
        var hours = Math.floor(x % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(x % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(x % (1000 * 60) / 1000);
        ConometroDOM.innerHTML = "".concat(hours, " H: ").concat(minutes, " M: ").concat(seconds, " S");
      }, 1000);
    } else {
      document.getElementById('modal_titulo').innerHTML = 'Erro lógico <img src="icons/exclamation-circle-solid.svg" width="30px" height="30px" class="ml-2">';
      document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
      document.getElementById('modal_conteudo').innerHTML = 'A data do evento precisa ser maior que a data atual.';
      document.getElementById('modal_btn').innerHTML = 'Voltar';
      document.getElementById('modal_btn').className = 'btn btn-danger';
      $('#modal-x').modal('show');
    }
  } else {
    document.getElementById('modal_titulo').innerHTML = 'Erro no preenchimento <img src="icons/exclamation-circle-solid.svg" width="30px" height="30px" class="ml-2">';
    document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
    document.getElementById('modal_conteudo').innerHTML = 'Preencha os campos corretamente!';
    document.getElementById('modal_btn').innerHTML = 'Voltar';
    document.getElementById('modal_btn').className = 'btn btn-danger';
    $('#modal-x').modal('show');
  }
}

function Calculator(tipo, valor) {
  var resultscreen = document.querySelector('[name=result]');

  if (tipo === 'acao') {
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      var add = function add() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (x === true) {
          resultscreen.value = resultscreen.value + valor;
        }
      };

      var lastnumber = resultscreen.value.charAt(resultscreen.value.length - 1);

      if (lastnumber === '+' || lastnumber === '-' || lastnumber === '*' || lastnumber === '/' || lastnumber === '') {
        add(false);
        console.log('Operadores não podem ser repetidos!');
      } else {
        add();
      }
    } else if (valor === '=' && resultscreen.value.length > 0) {
      console.log('The = bottom is working');
      var total = resultscreen.value;
      resultscreen.value = eval(total);
    } else if (valor == 'c') {
      resultscreen.value = '';
    }
  } else {
    var addx = function addx() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (x === true) {
        resultscreen.value = resultscreen.value + valor;
      }
    };

    var _lastnumber = resultscreen.value.charAt(resultscreen.value.length - 1);

    if (valor === '.' && (_lastnumber === '.' || _lastnumber === '')) {
      addx(false);
    } else {
      addx();
    }
  }
}
