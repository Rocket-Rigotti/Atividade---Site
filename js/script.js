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

    nome.innerHTML = "Zenitsu - Kimetsu no Yaiba";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Inosuke"){

    imagem.src = "./img/Inosuke.png";

    nome.innerHTML = "Inosuke - Kimetsu no Yaiba";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Nezuko"){

    imagem.src = "./img/Nezuko.png";

    nome.innerHTML = "Nezuko - Kimetsu no Yaiba";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Tanjiro"){

    imagem.src = "./img/Tanjiro.png";

    nome.innerHTML = "Tanjiro - Kimetsu no Yaiba";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Amora"){

    imagem.src = "./img/Amora - Moranguinho.png";

    nome.innerHTML = "Amora - Moranguinho";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Gotinha de limao"){

    imagem.src = "./img/Gotinha de limão - Moranguinho.png";

    nome.innerHTML = "Gotinha de Limão - Moranguinho";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Kimetsu no Yaiba"){

    imagem.src = "./img/Kimetsu no yaiba.png";

    nome.innerHTML = "Kimetsu no Yaiba - Kit";

    preco.innerHTML = "R$ 280,00";
}

else if(produto == "Arcane"){

    imagem.src = "./img/Arcane-Kit.png";

    nome.innerHTML = "Arcane - Kit";

    preco.innerHTML = "R$ 140,00";
}

else if(produto == "Camaleao"){

    imagem.src = "./img/Rapunzel-Sozinho.png";

    nome.innerHTML = "Flynn Rider - Rapunzel";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "One Piece"){

    imagem.src = "./img/Kit-One Piece.png";

    nome.innerHTML = "One Piece - Kit";

    preco.innerHTML = "R$ 210,00";
}

else if(produto == "Ekko"){

    imagem.src = "./img/Ekko-Arcane.png";

    nome.innerHTML = "Ekko - Arcane";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Jinx"){

    imagem.src = "./img/Jinx-Arcane.png";

    nome.innerHTML = "Jinx - Arcane";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "KRapunzel"){

    imagem.src = "./img/Kit - Rapunzel.png";

    nome.innerHTML = "Rapunzel - Kit";

    preco.innerHTML = "R$ 140,00";
}

else if(produto == "MoranguinhoK"){

    imagem.src = "./img/Kit - Moranguinho.png";

    nome.innerHTML = "Moranguinho";

    preco.innerHTML = "R$ 210,00";
}

else if(produto == "Ellie"){

    imagem.src = "./img/Ellie - The Last of Us.png";

    nome.innerHTML = "Ellie - The Last of Us";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Nami"){

    imagem.src = "./img/Nami - One Piece.png";

    nome.innerHTML = "Nami - One Piece";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "My Hero Academy"){

    imagem.src = "./img/My Hero Academy.png";

    nome.innerHTML = "My Hero Academy - Kit";

    preco.innerHTML = "R$ 210,00";
}

else if(produto == "The")
{
    imagem.src = "./img/The Apothecary Diaries.png";

    nome.innerHTML = "The Apothecary Diaries - Kit";

    preco.innerHTML = "R$ 140,00";
}

else if(produto == "Todoroki"){

    imagem.src = "./img/Todoroki.png";

    nome.innerHTML = "Todoroki - My Hero Academy";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Midoriya"){

    imagem.src = "./img/Midoriya.png";

    nome.innerHTML = "Midoriya - My Hero Academy";

    preco.innerHTML = "R$ 70,00";
}

else if(produto == "Bakugo"){

    imagem.src = "./img/Bakugo.png";

    nome.innerHTML = "Bakugo - My Hero Academy";

    preco.innerHTML = "R$ 70,00";
}





