const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

var linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizarTabela();
});

function adicionarLinhas(){
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (numeros.includes(inputNumero.value)){
        alert('Este contato já está salvo na sua agenda.');
    }else{
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);

        var linha = '<th>';
        linha += `<td>${inputNome.value}</td>`;
        linha += '</th>';
        linha += '<th>';
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</th>';
        linha += '<tr>';

        linhas += linha;
    };

    inputNome.value = '';
    inputNumero.value = '';
};

function atualizarTabela(){
    const listaContatos = document.querySelector('Table');
    listaContatos.innerHTML = linhas;
};