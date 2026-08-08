const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


/* UNIVERSITY FILTERING */

const schoolSearch = document.getElementById("schoolSearch");
const regionFilter = document.getElementById("regionFilter");
const typeFilter = document.getElementById("typeFilter");

const universityCards = document.querySelectorAll(".university-card");

const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");


function filterUniversities() {

  if (!universityCards.length) {
    return;
  }

  const searchValue =
    schoolSearch ? schoolSearch.value.toLowerCase().trim() : "";

  const regionValue =
    regionFilter ? regionFilter.value : "all";

  const typeValue =
    typeFilter ? typeFilter.value : "all";

  let visibleCount = 0;


  universityCards.forEach((card) => {

    const schoolName =
      card.dataset.name.toLowerCase();

    const schoolRegion =
      card.dataset.region;

    const schoolType =
      card.dataset.type;


    const matchesSearch =
      schoolName.includes(searchValue);


    const matchesRegion =
      regionValue === "all" ||
      schoolRegion === regionValue;


    const matchesType =
      typeValue === "all" ||
      schoolType === typeValue;


    if (
      matchesSearch &&
      matchesRegion &&
      matchesType
    ) {

      card.style.display = "flex";

      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });


  if (resultCount) {

    resultCount.textContent =
      `Showing ${visibleCount} ${visibleCount === 1 ? "university" : "universities"}`;

  }


  if (emptyState) {

    emptyState.style.display =
      visibleCount === 0 ? "block" : "none";

  }

}


if (schoolSearch) {
  schoolSearch.addEventListener(
    "input",
    filterUniversities
  );
}


if (regionFilter) {
  regionFilter.addEventListener(
    "change",
    filterUniversities
  );
}


if (typeFilter) {
  typeFilter.addEventListener(
    "change",
    filterUniversities
  );
}


filterUniversities();