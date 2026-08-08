const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


/* =========================
   UNIVERSITY DIRECTORY
========================= */

const schoolSearch =
  document.getElementById("schoolSearch");

const degreeFilter =
  document.getElementById("degreeFilter");

const strengthFilter =
  document.getElementById("strengthFilter");

const universityCards =
  document.querySelectorAll(".university-card");

const viewTabs =
  document.querySelectorAll(".view-tab");

const resultCount =
  document.getElementById("resultCount");

const emptyState =
  document.getElementById("emptyState");


let selectedView = "all";


function filterUniversities() {

  if (!universityCards.length) {
    return;
  }

  const searchValue =
    schoolSearch
      ? schoolSearch.value.toLowerCase().trim()
      : "";

  const degreeValue =
    degreeFilter
      ? degreeFilter.value
      : "all";

  const strengthValue =
    strengthFilter
      ? strengthFilter.value
      : "all";

  let visibleCount = 0;


  universityCards.forEach((card) => {

    const searchableText =
      (card.dataset.name || "").toLowerCase();

    const views =
      (card.dataset.view || "").split(" ");

    const degrees =
      (card.dataset.degrees || "").split(" ");

    const strengths =
      (card.dataset.strengths || "").split(" ");


    const matchesSearch =
      searchableText.includes(searchValue);

    const matchesView =
      selectedView === "all" ||
      views.includes(selectedView);

    const matchesDegree =
      degreeValue === "all" ||
      degrees.includes(degreeValue);

    const matchesStrength =
      strengthValue === "all" ||
      strengths.includes(strengthValue);


    if (
      matchesSearch &&
      matchesView &&
      matchesDegree &&
      matchesStrength
    ) {

      card.style.display = "flex";

      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });


  if (resultCount) {

    resultCount.textContent =
      `Showing ${visibleCount} ${
        visibleCount === 1
          ? "university"
          : "universities"
      }`;

  }


  if (emptyState) {

    emptyState.style.display =
      visibleCount === 0
        ? "block"
        : "none";

  }

}


viewTabs.forEach((button) => {

  button.addEventListener("click", () => {

    viewTabs.forEach((tab) => {
      tab.classList.remove("active-view");
    });

    button.classList.add("active-view");

    selectedView =
      button.dataset.view || "all";

    filterUniversities();

  });

});


if (schoolSearch) {
  schoolSearch.addEventListener(
    "input",
    filterUniversities
  );
}


if (degreeFilter) {
  degreeFilter.addEventListener(
    "change",
    filterUniversities
  );
}


if (strengthFilter) {
  strengthFilter.addEventListener(
    "change",
    filterUniversities
  );
}


filterUniversities();