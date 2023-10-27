

//codifica o texto
function code() {
    const campo1 = document.getElementById("textonormal");
    const result = document.getElementById("result");

    //.trim tira os espaçamentos do inicio e fim
    const inputValue = campo1.value.trim();

    //cria um array
    let asciiValues = [];

    //percorre todo o array e codifica cada caractere em ascii pela função charCodeAt
    for (let i = 0; i < inputValue.length; i++) {
        const asciiValue = inputValue.charCodeAt(i);
        asciiValues.push(asciiValue);
    }

    //transfroma o numero gerado em binário utilizando toString(2) e coloca um minimo de 8 digitos completando com zeros a esquerda, alem de atribuir um espaçamento entre um caractere e outro
    result.innerHTML = asciiValues.map(value => value.toString(2).padStart(8, '0') ).join(" ");
}


//decodifica o numero binário
function decode() {
    const result2 = document.getElementById("textonormal1");
    const campo2 = document.getElementById("result1");
    let resultado = "";

    //retira os espaçamentos
    const inputValues = campo2.value.trim().split(' ');

    //cria um loop lendo cada caractere e as insere em um array
    for (let k = 0; k < inputValues.length; k++) {
        const inputValue = inputValues[k];

        let ascii = 0;

        //percorre o array de frente para tras realizando a formula matematica que descodifica o numero binário e o transforma em um decimal
        for (let i = inputValue.length - 1; i >= 0; i--) {
            const binario = parseInt(inputValue[i], 2);
            ascii += binario * Math.pow(2, inputValue.length - 1 - i);
        }


        //atraves da função fromCharCode transforma os numeros gerados em caracteres da tabela ascii
        resultado += String.fromCharCode(ascii);
    }

    result2.innerHTML = resultado;
}

//copia o codigo da pagina code
function copiarTextoIndex() {
    
    let elemento = document.getElementById("result");

    // Cria um campo de texto temporário para copiar o conteúdo
    let campoTemporario = document.createElement("textarea");
    campoTemporario.value = elemento.textContent; // Copia o conteúdo do elemento <code>

    // Adiciona o campo temporário à página
    document.body.appendChild(campoTemporario);

    // Seleciona o texto dentro do campo temporário
    campoTemporario.select();
    campoTemporario.setSelectionRange(0, 99999); // Para celular

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o campo temporário da página
    document.body.removeChild(campoTemporario);

    
}

//copia o codigo da pagina decode
function copiarTextoDecode() {
    
    let elemento = document.getElementById("textonormal1");

    // Cria um campo de texto temporário para copiar o conteúdo
    let campoTemporario = document.createElement("textarea");
    campoTemporario.value = elemento.textContent; // Copia o conteúdo do elemento <code>

    // Adiciona o campo temporário à página
    document.body.appendChild(campoTemporario);

    // Seleciona o texto dentro do campo temporário
    campoTemporario.select();
    campoTemporario.setSelectionRange(0, 99999); // Para celular

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o campo temporário da página
    document.body.removeChild(campoTemporario);

    
}
