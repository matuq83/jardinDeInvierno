/*function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";

  // Clear search input and reset visibility of items within the selected section
  document.getElementById("searchInput").value = "";
  selectedSection.querySelectorAll(".item").forEach((item) => {
    item.style.display = "flex"; // Show all items initially
  });
}*/

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";

  // Clear search input and reset visibility of items within the selected section
  document.getElementById("searchInput").value = "";
  selectedSection.querySelectorAll(".item").forEach((item) => {
    item.style.display = "flex"; // Show all items initially
  });
}

function searchProducts() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const selectedSection = document.querySelector(".section[style*='block']"); // Get the currently visible section

  if (selectedSection) {
    const items = selectedSection.querySelectorAll(".item");
    items.forEach(item => {
      const titleElement = item.querySelector(".details h3");
      const itemName = titleElement ? titleElement.textContent.toLowerCase() : "";
  
      if (itemName.includes(searchInput)) {
        item.style.display = "flex"; // Muestra el ítem si coincide
      } else {
        item.style.display = "none"; // Oculta el ítem si no coincide
      }
    });
  } else {
    console.warn("No hay ninguna sección visible para buscar");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage('es'); // Cambia 'es' por el idioma que prefieras como predeterminado
});

async function changeLanguage(language) {
  const response = await fetch('./data/lang.json'); // Ruta del archivo JSON
  const translations = await response.json();

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    const keys = key.split('.'); // Divide por niveles (por ejemplo, "header.title")
    let translation = translations[language];
    keys.forEach((k) => {
      translation = translation[k];
    });

    if (translation) {
      element.textContent = translation; // Actualiza el texto
    }
  });

  alert("Idioma cambiado a: " + language);
}

window.onscroll = function () {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Añade un desplazamiento suave
  });
}
