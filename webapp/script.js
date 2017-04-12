function calcularIMC(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var sexo = document.getElementById("select").value;
    var output = document.getElementById('message');
    
    var imc = (peso / (altura / 100 * altura / 100));
    var message = '';

    if (peso == '' || altura == '') {
        document.getElementById("message").innerHTML = '<h4>Preencha os campos</h4>';
        return false;
    }

    if (sexo == 'mas') {
        if (imc < 19.1) {
            message = 'Você está abaixo do peso';
        } else if (imc >= 19.1 && imc < 25.8){
            message = 'Seu peso está normal';
        } else if (imc >= 25.8 && imc < 27.3) {
            message = 'Você está marginalmente acima do peso';
        } else if (imc >= 27.3 && imc < 32.3){
            message = 'Você está acima do peso';
        } else {
            message = 'Você está obeso';
        }
    } else {
        if (imc < 20.7) {
            message = 'Você está abaixo do peso';
        } else if (imc >= 20.7 && imc < 26.4){
            message = 'Seu peso está normal';
        } else if (imc >= 26.4 && imc < 27.8) {
            message = 'Você está marginalmente acima do peso';
        } else if (imc >= 27.8 && imc < 31.1){
            message = 'Você está acima do peso';
        } else {
            message = 'Você está obeso';
        }
    }

    imc = imc.toFixed(2);
    output.innerHTML = '<h1>' +imc+ '</h1><h4>' +message+ '</h4>';
}

function refresh() {
    location.reload();
}