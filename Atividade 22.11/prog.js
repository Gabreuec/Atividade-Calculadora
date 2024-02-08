function resolver() {
    document.getElementById('result').innerHTML = '';
    const calc = document.getElementById('result');
    const numero = parseInt(document.getElementById('numero').value);
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const linha = document.createElement('tr'); //uma linha na tabela 
        linha.innerHTML = '<td>' + i +' x ' + numero + '</td><td>' + resultado + '</td>';  //adicina celulas a tabela

        calc.appendChild(linha); // adiciona uma nova linha na tabela
    }
}
