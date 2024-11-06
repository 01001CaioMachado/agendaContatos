// Array para armazenar os usuários cadastrados
let usuarios = [];

// Função para atualizar o ID no rodapé e exibir o novo cadastro na tabela
function atualizarTabela() {
    // Seleciona o corpo da tabela
    const tbody = document.querySelector("tbody");

    // Limpa o conteúdo da tabela para evitar duplicatas
    tbody.innerHTML = "";

    // Adiciona cada usuário como uma nova linha na tabela
    usuarios.forEach(usuario => {
        // Cria uma nova linha
        const tr = document.createElement("tr");

        // Cria células para o ID, nome e telefone
        const tdId = document.createElement("td");
        tdId.textContent = usuario.id;

        const tdNome = document.createElement("td");
        tdNome.textContent = usuario.nome;

        const tdTelefone = document.createElement("td");
        tdTelefone.textContent = usuario.telefone;

        // Adiciona as células à linha
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdTelefone);

        // Adiciona a linha ao corpo da tabela
        tbody.appendChild(tr);
    });

    // Atualiza o ID no rodapé da tabela com o próximo ID esperado
    document.getElementById("userId").textContent = usuarios.length + 1;
}

// Evento para capturar o envio do formulário e cadastrar o usuário
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const nome = document.getElementById("nome-Cadastro").value;
    const telefone = document.getElementById("telefone-Cadastro").value;

    // Cria um novo usuário com ID
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome,
        telefone: telefone
    };

    // Adiciona o novo usuário ao array
    usuarios.push(novoUsuario);

    // Limpa o formulário
    document.getElementById("formCadastro").reset();

    // Atualiza a tabela com o novo usuário
    atualizarTabela();
});

function formatarTelefone(telefone) {
    // Remove caracteres não numéricos
    telefone.value = telefone.value.replace(/\D/g, "");

    // Adiciona a máscara para o formato (XX) XXXXX-XXXX
    telefone.value = telefone.value.replace(/^(\d{2})(\d)/g, "($1) $2");
    telefone.value = telefone.value.replace(/(\d{5})(\d)/, "$1-$2");
}

// Função para validar se o telefone tem um formato válido
function validarTelefone(telefone) {
    // Expressão regular para validar (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    const telefoneValido = /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
    return telefoneValido;
}