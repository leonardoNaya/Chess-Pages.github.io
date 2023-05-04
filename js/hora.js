function llamar_hora() {
    let fecha = new Date();
    hora = fecha.getHours();
    minuto = fecha.getMinutes();
    segundo = fecha.getSeconds();
    let a = document.getElementById(actualizable);
    a.innerHTML = fecha + "<br>" + hora;
    setTimeout("llamar_hora()", 1000)
}