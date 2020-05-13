function WorkingWithDataBaseToDate(){
    let datainicial =  document.querySelector('[name=datainicial]')
    let datafinal  = document.querySelector('[name=datafinal]')
    let x = datainicial.value
    let y = datafinal.value

    if(datainicial.value.length > 0 &&  datafinal.value.length > 0){
        let datainicialx = new Date(x)
        let datafinaly = new Date(y)

            if(datafinaly > datainicialx){
               let result = ((datafinaly.getTime() - datainicialx.getTime()) / (1000*60*60*24))
               document.getElementById('cloack').innerHTML = `<p> Falta(m) </br> ${result} dia(s) </br> </p>`
            }
            else{
                alert('Data final menor ou igual que a data inicial!')
            }
    }
    else{
        alert('Preencha os campos corretamente !')
    }

}

function WorkingWithCurrentDate(){
    let DataEventDOM = document.querySelector('[name=dataevento]')
    let DataEvent = DataEventDOM.value
    let ConometroDOM = document.getElementById('contagemregressiva')
    let DataCurrent = new Date()

    if(DataEvent.length > 0){
        const DataEventX = new Date(DataEvent)
        DataEventX.setHours(0)
        DataEventX.setDate(DataEventX.getDate() + 1)
        console.log(DataEventX)
            if(DataEventX > DataCurrent){
                    
                setInterval(function(){
                    let DataCurrent = new Date()
                    let x = DataEventX.getTime() - DataCurrent.getTime()
                
                    let hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((x % (1000 * 60)) / 1000);
                    
                    ConometroDOM.innerHTML = `${hours} H: ${minutes} M: ${seconds} S`
                },1000)

            }
            else{
                document.getElementById('modal_titulo').innerHTML = 'Erro lógico <img src="icons/exclamation-circle-solid.svg" width="30px" height="30px" class="ml-2">'
                document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
                document.getElementById('modal_conteudo').innerHTML = 'A data do evento precisa ser maior que a data atual.'
                document.getElementById('modal_btn').innerHTML = 'Voltar'
                document.getElementById('modal_btn').className = 'btn btn-danger'
                $('#modal-x').modal('show') 
            }
        
    }
    else{
                 document.getElementById('modal_titulo').innerHTML = 'Erro no preenchimento <img src="icons/exclamation-circle-solid.svg" width="30px" height="30px" class="ml-2">'
                document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
                document.getElementById('modal_conteudo').innerHTML = 'Preencha os campos corretamente!'
                document.getElementById('modal_btn').innerHTML = 'Voltar'
                document.getElementById('modal_btn').className = 'btn btn-danger'
                $('#modal-x').modal('show') 
    }
}

function Calculator(tipo,valor){
    let resultscreen = document.querySelector('[name=result]')

    if(tipo === 'acao'){
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/'){

           function add(x = true){
            if(x === true){
                resultscreen.value = resultscreen.value + valor
                }            
            }

            let lastnumber = resultscreen.value.charAt(resultscreen.value.length-1)

                if(lastnumber === '+' || lastnumber === '-' || lastnumber === '*' || lastnumber === '/' || lastnumber === ''){
                        add(false)
                        console.log('Operadores não podem ser repetidos!')
                }else{
                        add()
                }    

               
        }
    else if(valor === '=' && resultscreen.value.length > 0){
            console.log('The = bottom is working')
            let total = resultscreen.value
            resultscreen.value = eval(total)
        }
    else if(valor == 'c'){
            resultscreen.value = ''
        }
    }
    else{

        function addx(x = true){
            if(x === true){
                resultscreen.value = resultscreen.value + valor
                }            
        }

        let lastnumber = resultscreen.value.charAt(resultscreen.value.length-1)


            if(valor === '.' && (lastnumber === '.' || lastnumber === '')){
                 addx(false)
            }
            else{
                  addx()
             }

    }
}