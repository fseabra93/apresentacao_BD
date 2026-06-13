function mostrar(){
    document.getElementById('texto1').innerHTML = 'Preparar para cirurgia';
    document.getElementById('texto2').innerHTML = 'Controle da dor e infecção pós-operatórias';
}

function nimesulida(){
    document.getElementById('nim1').innerHTML = 'Porque funciona';
    document.getElementById('nim2').innerHTML = '...na maioria dos casos.';  
}

function cox1_2(){
    document.getElementById("coxes").style.display ='block';
    document.getElementById("cox2_button").style.display ='none';
    document.getElementById("cox1_button").style.display ='none';
    document.getElementById("mas_button").style.display ='none';
}

function cox1(){
    document.getElementById("coxes").style.display ='none';
    document.getElementById("cox2_button").style.display ='none';
    document.getElementById("cox1_button").style.display ='block';
    document.getElementById("mas_button").style.display ='none';
}

function cox2(){
    document.getElementById("coxes").style.display ='none';
    document.getElementById("cox1_button").style.display ='none';
    document.getElementById("cox2_button").style.display ='block';
    document.getElementById("mas_button").style.display ='none';
}

function mas(){
    document.getElementById("coxes").style.display ='none';
    document.getElementById("cox1_button").style.display ='none';
    document.getElementById("cox2_button").style.display ='none';
    document.getElementById("mas_button").style.display ='block';

}

function risco(){
    document.getElementById("risco_button").style.display ='block';
    document.getElementById("outros_button").style.display ='none';
}

function outros(){
    document.getElementById("risco_button").style.display ='none';
    document.getElementById("outros_button").style.display ='block';
}

function limpar(){
    document.getElementById("risco_button").style.display ='none';
    document.getElementById("outros_button").style.display ='none';


}

function limpar2(){
    document.getElementById("escada_button").style.display ='none';
    document.getElementById("tylex_button").style.display ='none';
    document.getElementById("tramal_button").style.display ='none';
    document.getElementById("rce_button").style.display ='none';
}

function limpar3(){
    document.getElementById("bacteria_button").style.display ='none';
    document.getElementById("gram_button").style.display ='none';

}

function escada(){
    document.getElementById("escada_button").style.display ='block';
    document.getElementById("tylex_button").style.display ='none';
    document.getElementById("tramal_button").style.display ='none';
    document.getElementById("rce_button").style.display ='none';

}

function tylex(){
    document.getElementById("escada_button").style.display ='none';
    document.getElementById("tylex_button").style.display ='block';
    document.getElementById("tramal_button").style.display ='none';
    document.getElementById("rce_button").style.display ='none';

}

function tramal(){
    document.getElementById("escada_button").style.display ='none';
    document.getElementById("tylex_button").style.display ='none';
    document.getElementById("tramal_button").style.display ='block';
    document.getElementById("rce_button").style.display ='none';

}

function rce(){
    document.getElementById("escada_button").style.display ='none';
    document.getElementById("tylex_button").style.display ='none';
    document.getElementById("tramal_button").style.display ='none';
    document.getElementById("rce_button").style.display ='block';


}

function bacteria(){
    document.getElementById("bacteria_button").style.display ='block';
    document.getElementById("gram_button").style.display ='none';
}

function gram(){
    document.getElementById("gram_button").style.display ='block';
    document.getElementById("bacteria_button").style.display ='none';
}

function leve(){
    document.getElementById("leve_button").style.display ='block';
    
}

function profil_trat(){
    document.getElementById('profilaxia_tratamento1').innerHTML = 'Isso não foi falta de PROFILAXIA';
    document.getElementById('profilaxia_tratamento2').innerHTML = 'Isso foi falta de TRATAR UMA INFECÇÃO PRÉVIA por falta de cuidado no diagnóstico.';
    document.getElementById('profilaxia_tratamento3').innerHTML = 'Então o que é PROFILAXIA?';   
}

function profilaxia(){
    document.getElementById("profilaxia_button").style.display ='block';
    
}

function posologia() {
    //document.getElementById('posologia').innerHTML = '';
    //document.getElementById('ou').innerHTML = ''
    //document.getElementById('posologia2').innerHTML = '';
    var med_selecionado = document.getElementById("medicamento");
    var medicamento = med_selecionado.options[med_selecionado.selectedIndex].text;
    var pac_selecionado = document.getElementById("paciente");
    var paciente = pac_selecionado.options[pac_selecionado.selectedIndex].text;
    
    if(paciente === "Adulto"){
        if (medicamento === "Dipirona"){
            document.getElementById('posologia').innerHTML = 'Dipirona (500 mg) de 6 em 6 horas por 3 dias.';
            document.getElementById('ou').innerHTML = ''
            document.getElementById('posologia2').innerHTML = '';
        }
        if (medicamento === "Paracetamol"){
            document.getElementById('posologia').innerHTML = 'Paracetamol (750 mg) de 6 em 6 horas por 3 dias.';
            document.getElementById('ou').innerHTML = ''
            document.getElementById('posologia2').innerHTML = '';
        } 
        if (medicamento === "Nimesulida"){
            document.getElementById('posologia').innerHTML = 'Nimesulida (100 mg) de 12 em 12 horas por 3 dias.';
            document.getElementById('ou').innerHTML = 'ou'
            document.getElementById('posologia2').innerHTML = 'Nimesulida (100 mg) de 24 em 24 horas por 3 dias.';
        }
        if (medicamento === "Diclofenaco"){
            document.getElementById('posologia').innerHTML = 'Diclofenaco de sódio (50 mg) de 8 em 8 horas por 3 dias.';
            document.getElementById('ou').innerHTML = ''
            document.getElementById('posologia2').innerHTML = '';
        }
        if (medicamento === "Etoricoxibe"){
            document.getElementById('posologia').innerHTML = 'Etoricoxibe (90 mg) de 24 em 24 horas por 3 dias.';
            document.getElementById('ou').innerHTML = ''
            document.getElementById('posologia2').innerHTML = '';
        }

    } else {
        var gotas = 0;
        var dose = 0;
        var valorPeso = document.getElementById("peso");
        var peso_num = parseInt(valorPeso.value);
        var imprimepeso = document.getElementById('posologia')
        var posologia = `O peso da criança é ${peso_num} kilos.`
        imprimepeso.innerHTML = posologia;

        if (medicamento === 'Dipirona'){
            if(peso_num >= 9 && peso_num <= 15){
                gotas = 10;
            }
            if (peso_num >=16 && peso_num <= 23){
                gotas = 15
            }
            if (peso_num >=24 && peso_num <= 30){
                gotas = 20
            }
            if (peso_num >=31 && peso_num <= 23){
                gotas = 45
            }
            var pos_crianca = document.getElementById('posologia2');
            var posologia2 = `Dipirona gotas (500 mg/ml), <br> tomar <i><strong>${gotas} gotas</strong></i> de 06 em 06 horas por 03 dias.`
            pos_crianca.innerHTML = posologia2;
            var valorPeso = document.getElementById("peso").value = '';
        }

        if (medicamento === 'Paracetamol'){
            if(peso_num >= 11 && peso_num <= 15){
                dose = 5;
            }
            if (peso_num >=16 && peso_num <= 21){
                dose = 7.5
            }
            if (peso_num >=22 && peso_num <= 26){
                dose = 10
            }
            if (peso_num >=27 && peso_num <= 31){
                dose = 12.5
            }
            if (peso_num >=32 && peso_num <= 43){
                dose = 15
            }
            var pos_crianca = document.getElementById('posologia2');
            var posologia2 = `Paracetamol suspensão oral (32 mg/ml), <br> tomar <i><strong>${dose} ml</strong></i> de 06 em 06 horas por 03 dias.<br>ou<br> Paracetamol gotas (200 mg/ml) <br> tomar uma gota por kilo de 6 em 6 horas por 3 dias.`
            pos_crianca.innerHTML = posologia2;
            var valorPeso = document.getElementById("peso").value = '';
        }

        if (medicamento === 'Nimesulida'){
            /*if(peso_num >= 11 && peso_num <= 15){
                dose = 5;
            }
            if (peso_num >=16 && peso_num <= 21){
                dose = 7.5
            }
            if (peso_num >=22 && peso_num <= 26){
                dose = 10
            }
            if (peso_num >=27 && peso_num <= 31){
                dose = 12.5
            }
            if (peso_num >=32 && peso_num <= 43){
                dose = 15
            }*/
            var pos_crianca = document.getElementById('posologia2');
            var posologia2 = `A nimesulida só pode ser usada em crianças acima de 12 anos. <br><br>Nimesulida gotas (50 mg/ml) <br> tomar uma gota por kilo de 12 em 12 horas por 3 dias.`
            pos_crianca.innerHTML = posologia2;
            var valorPeso = document.getElementById("peso").value = '';
        }

        if (medicamento === 'Diclofenaco'){
            /*if(peso_num >= 11 && peso_num <= 15){
                dose = 5;
            }
            if (peso_num >=16 && peso_num <= 21){
                dose = 7.5
            }
            if (peso_num >=22 && peso_num <= 26){
                dose = 10
            }
            if (peso_num >=27 && peso_num <= 31){
                dose = 12.5
            }
            if (peso_num >=32 && peso_num <= 43){
                dose = 15
            }*/
            var pos_crianca = document.getElementById('posologia2');
            var posologia2 = `De acordo com a RDC nº 137/2003, todo medicamento que contenha diclofenaco é contra-indicado para menores de 14 anos de idade, exceto em casos de artrite juvenil crônica. `
            pos_crianca.innerHTML = posologia2;
            var valorPeso = document.getElementById("peso").value = '';
        }

        if (medicamento === 'Etoricoxibe'){
            /*if(peso_num >= 11 && peso_num <= 15){
                dose = 5;
            }
            if (peso_num >=16 && peso_num <= 21){
                dose = 7.5
            }
            if (peso_num >=22 && peso_num <= 26){
                dose = 10
            }
            if (peso_num >=27 && peso_num <= 31){
                dose = 12.5
            }
            if (peso_num >=32 && peso_num <= 43){
                dose = 15
            }*/
            var pos_crianca = document.getElementById('posologia2');
            var posologia2 = `O etoricoxobe NÃO deve ser usado em crianças. `
            pos_crianca.innerHTML = posologia2;
            var valorPeso = document.getElementById("peso").value = '';
        }
        
    }
  
}


function posologia_op(){
    var med_selecionado = document.getElementById("medicamento_op");
    var medicamento = med_selecionado.options[med_selecionado.selectedIndex].text;
    var pac_selecionado = document.getElementById("paciente_op");
    var paciente = pac_selecionado.options[pac_selecionado.selectedIndex].text;

    if(paciente === "Adulto"){
        if (medicamento === "Tylex"){
            document.getElementById('posologia_op').innerHTML = 'Tylex (500 mg / 7,5 mg) de 6 em 6 horas por 3 dias.';
            document.getElementById('ou_op').innerHTML = 'ou'
            document.getElementById('posologia2_op').innerHTML = 'Tylex (500 mg / 30 mg) de 6 em 6 horas por 3 dias.';
        }
        if (medicamento === "Tramadol"){
            document.getElementById('posologia_op').innerHTML = 'Tramadol (50 mg) de 6 em 6 horas por 3 dias.';
            document.getElementById('ou_op').innerHTML = 'ou'
            document.getElementById('posologia2_op').innerHTML = 'Tramadol (100 mg) de 6 em 6 horas por 3 dias.';
        } 
        

    } else {

        var gotas = 0;
        var dose = 0;
        var valorPeso = document.getElementById("peso_op");
        var peso_num = parseInt(valorPeso.value);
        var imprimepeso = document.getElementById('posologia_op')
        var posologia = `O peso da criança é ${peso_num} kilos.`
        imprimepeso.innerHTML = posologia;

        if (medicamento == "Tylex"){
            document.getElementById('ou_op').innerHTML = ''
            document.getElementById('posologia2_op').innerHTML = 'A codeína é contraindicada para dor <br>em crianças abaixo de 12 anos.';

        }

        if (medicamento == "Tramadol"){
            if(peso_num >= 10 && peso_num <= 14){
                gotas = 6;
            }
            if (peso_num >=15 && peso_num <= 19){
                gotas = 10
            }
            if (peso_num >=20 && peso_num <= 29){
                gotas = 15
            }
            if (peso_num >=30 && peso_num <= 40){
                gotas = 22
            }
            if (peso_num >40){
                gotas = 30
            }
            var pos_crianca = document.getElementById('posologia2_op');
            var posologia2_op = `Tramadol gotas (100 mg/ml), <br> tomar <i><strong>${gotas} gotas</strong></i> de 06 em 06 horas por 03 dias.`
            pos_crianca.innerHTML = posologia2_op;
            var valorPeso = document.getElementById("peso_op").value = '';
            //document.getElementById('posologia2_op').innerHTML = '';

        }
    }
        


}



