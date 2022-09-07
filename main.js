let prestamoCliente = prompt("cuanto dinero necesitas? (ingresa el monto sin puntos) ");

if (prestamoCliente <= 200000 & prestamoCliente >= 10000) {
    cuotasPrestamo = prompt("elegi en cuantas cuotas queres abonar, tenes entre 12 y 24");
} else {
    alert("proba con otro monto, recorda que es entre $200.000 y $10.000");
}

while (prestamoCliente < 10000 && prestamoCliente > 200000) {
    alert("recorda que podes pedir entre $10.000 y $200.000");
    prestamoCliente = prompt("Ingrese cuanto dinero necesita: ");
}

if (cuotasPrestamo == 12) {
    alert("terminas abonando por mes $" + prestamoCliente / 12 * 1.35);
}

if (cuotasPrestamo == 24) {
    alert("terminas abonando por mes $" + prestamoCliente / 24 * 1.35);
}

while (cuotasPrestamo != 12 && cuotasPrestamo != 24) {
    alert("Recorda que las cuotas pueden ser entre 12 y 24");
    cuotasPrestamo = prompt("Elegi la cantidad de cuotas en las que deseas abonar: ");
}

if (cuotasPrestamo == 12) {
    alert("terminas abonando por mes $" + prestamoCliente / 12 * 1.35);
}

if (cuotasPrestamo == 24) {
    alert("terminas abonando por mes $" + prestamoCliente / 24 * 1.35);
}






