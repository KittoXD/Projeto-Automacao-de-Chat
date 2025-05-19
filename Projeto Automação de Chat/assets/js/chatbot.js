document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('input[name="text"]');
  const chatContainer = document.querySelector("#mensagens");

  const respostas = [
    {
      palavras: ["olá", "oi", "ola", "opa", "eae", "ei"],
      resposta: "Oi! Tudo bem? Como posso te ajudar hoje?",
    },
    {
      palavras: [
        "quem e tu",
        "quem e vc",
        "quem e voce",
        "quem é voce",
        "quem é você",
        "quem voce é",
        "quem é vc",
        "quem é tu",
        "quem é você?",
      ],
      resposta: "Sou um assistente virtual simples.",
    },
    {
      palavras: [
        "adeus",
        "tchau",
        "falou",
        "até mais",
        "até logo",
        "flws",
        "bye",
      ],
      resposta: "Até logo! Volte sempre.",
    },
    {
      palavras: [
        "me fale como funciona a automação",
        "me fale como funciona a automacao",
        "como funciona a automação?",
        "como funciona a automação",
        "como funciona a automacao",
      ],
      resposta:
        "Funciona assim, quando você digita uma mensagem no chat e o sistema analisa o texto para identificar palavras ou expressões conhecidas. Com base nisso, ele seleciona uma resposta adequada e a exibe para você. Caso não reconheça o conteúdo, o sistema informa que não entendeu a mensagem. Todo esse processo ocorre rapidamente, simulando uma conversa natural, mas de forma automatizada para facilitar o atendimento.",
    },
    {
      palavras: ["blz", "beleza", "ta bom", "tranquilo"],
      resposta: "Conseguiu entender? Qualquer coisa só chamar!",
    },
    {
      palavras: ["sim", "entendi", "tendi", "sim entendi", "claro"],
      resposta: "Que bom, qualquer coisa só chamar!",
    },
    {
      palavras: ["nao", "não", "nop", "nao entendi", "não entendi", "no"],
      resposta: "Irei explicar de uma maneira mais prática",
    },
  ];

  function adicionarMensagem(origem, mensagem) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${origem}:</strong> ${mensagem}`;
    chatContainer.appendChild(p);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function responder(mensagem) {
    const texto = mensagem.toLowerCase();
    let resposta = "Desculpe, não entendi. Pode repetir?";

    for (const item of respostas) {
      if (item.palavras.some((palavra) => texto.includes(palavra))) {
        resposta = item.resposta;
        break;
      }
    }

    setTimeout(() => {
      adicionarMensagem("Bot", resposta);
    }, 600);
  }

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const mensagem = input.value.trim();
      adicionarMensagem("Você", mensagem);
      responder(mensagem);
      input.value = "";
    }
  });
  const btnEnviar = document.querySelector("#enviarBtn");
  if (btnEnviar) {
    btnEnviar.addEventListener("click", () => {
      if (input.value.trim() !== "") {
        const mensagem = input.value.trim();
        adicionarMensagem("Você", mensagem);
        responder(mensagem);
        input.value = "";
      }
    });
  }
});
