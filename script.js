/*
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
  const input = document.getElementById("searchInput").value.toLowerCase();
  const visibleSection = document.querySelector(".section[style*='block']");

  if (visibleSection) {
    const items = visibleSection.querySelectorAll(".item");

    items.forEach((item) => {
      const itemName = item.querySelector(".details h3").textContent.toLowerCase();
      if (itemName.includes(input)) {
        item.style.display = "flex"; // Show item if it matches search
      } else {
        item.style.display = "none"; // Hide item if it doesn't match search
      }
    });
  }
}

function changeLanguage(language) {
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

*/