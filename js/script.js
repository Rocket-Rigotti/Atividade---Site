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