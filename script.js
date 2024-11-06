function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  document.getElementById(sectionId).style.display = "block";
}

function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const itemName = item
      .querySelector(".details h3")
      .textContent.toLowerCase();
    if (itemName.includes(input)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function changeLanguage(language) {
  // Implement language change logic here
  alert("Language changed to: " + language);
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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
