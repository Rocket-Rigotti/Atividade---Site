function showSidebar()
{
     const sidebar = document.querySelector(".sidebar");
     sidebar.style.display = "flex";
}

function hideSidebar()
{
     const sidebar = document.querySelector(".sidebar");
     sidebar.style.display = "none";
}

function toggleKits()
{
   const submenu = document.querySelector(".kits-submenu");

   if(submenu.style.display === "flex")
    {
      submenu.style.display = "none";
    }

   else
    {
      submenu.style.display = "flex";
    }
}

function toggleIndividual()
{
   const submenu = document.querySelector(".individual-submenu");

   if(submenu.style.display === "flex")
    {
      submenu.style.display = "none";
    }

   else
    {
      submenu.style.display = "flex";
    }
}

const params = new URLSearchParams(window.location.search);

const produto = params.get("produto");

const imagem = document.getElementById("imagem-produto");

const nome = document.getElementById("nome-produto");

const preco = document.getElementById("preco-produto");

if(produto == "Rapunzel"){

    imagem.src = "./img/Rapunzel-Sozinha.png";

    nome.innerHTML = "Rapunzel";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Luffy"){

    imagem.src = "./img/Luffy - One Piece.png";

    nome.innerHTML = "Luffy - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Moranguinho"){

    imagem.src = "./img/Moranguinho.png";

    nome.innerHTML = "Moranguinho";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Zoro"){

    imagem.src = "./img/Zoro - One Piece.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Zenitsu"){

    imagem.src = "./img/Zenitsu.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Inosuke"){

    imagem.src = "./img/Inosuke.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Nezuko"){

    imagem.src = "./img/Nezuko.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Tanjiro"){

    imagem.src = "./img/Tanjiro.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Amora"){

    imagem.src = "./img/Amora - Moranguinho.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Gotinha de limao"){

    imagem.src = "./img/Gotinha de limão - Moranguinho.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Kimetsu no Yaiba"){

    imagem.src = "./img/Kimetsu no yaiba.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Arcane"){

    imagem.src = "./img/Arcane-Kit.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Camaleao"){

    imagem.src = "./img/Rapunzel-Sozinho.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "One Piece"){

    imagem.src = "./img/Kit-One Piece.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Ekko"){

    imagem.src = "./img/Ekko-Arcane.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Jinx"){

    imagem.src = "./img/Jinx-Arcane.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "KRapunzel"){

    imagem.src = "./img/Kit - Rapunzel.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "MoranguinhoK"){

    imagem.src = "./img/Kit - Moranguinho.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Ellie"){

    imagem.src = "./img/Ellie - The Last of Us.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Nami"){

    imagem.src = "./img/Nami - One Piece.png";

    nome.innerHTML = "Zoro - One Piece";

    preco.innerHTML = "R$ 70,00";
}





