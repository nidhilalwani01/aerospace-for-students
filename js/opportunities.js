const opportunitySearch =
  document.getElementById("opportunitySearch");

const ageFilter =
  document.getElementById("ageFilter");

const locationFilter =
  document.getElementById("locationFilter");

const opportunityCards =
  document.querySelectorAll(".opportunity-card");

const categoryButtons =
  document.querySelectorAll(".category-card");

const opportunityResultCount =
  document.getElementById("opportunityResultCount");

const opportunityEmptyState =
  document.getElementById("opportunityEmptyState");


let selectedCategory = "all";


function filterOpportunities() {

  const searchValue =
    opportunitySearch
      ? opportunitySearch.value.toLowerCase().trim()
      : "";

  const levelValue =
    ageFilter
      ? ageFilter.value
      : "all";

  const locationValue =
    locationFilter
      ? locationFilter.value
      : "all";

  let visibleCount = 0;


  opportunityCards.forEach((card) => {

    const name =
      card.dataset.name.toLowerCase();

    const category =
      card.dataset.category;

    const level =
      card.dataset.level;

    const location =
      card.dataset.location;


    const matchesSearch =
      name.includes(searchValue);

    const matchesCategory =
      selectedCategory === "all" ||
      category === selectedCategory;

    const matchesLevel =
      levelValue === "all" ||
      level === levelValue ||
      level === "multiple";

    const matchesLocation =
      locationValue === "all" ||
      location === locationValue;


    if (
      matchesSearch &&
      matchesCategory &&
      matchesLevel &&
      matchesLocation
    ) {

      card.style.display = "flex";

      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });


  if (opportunityResultCount) {

    opportunityResultCount.textContent =
      `Showing ${visibleCount} ${
        visibleCount === 1
          ? "opportunity"
          : "opportunities"
      }`;

  }


  if (opportunityEmptyState) {

    opportunityEmptyState.style.display =
      visibleCount === 0
        ? "block"
        : "none";

  }

}


categoryButtons.forEach((button) => {

  button.addEventListener("click", () => {

    categoryButtons.forEach((item) => {
      item.classList.remove("active-category");
    });

    button.classList.add("active-category");

    selectedCategory =
      button.dataset.category;

    filterOpportunities();

  });

});


if (opportunitySearch) {
  opportunitySearch.addEventListener(
    "input",
    filterOpportunities
  );
}


if (ageFilter) {
  ageFilter.addEventListener(
    "change",
    filterOpportunities
  );
}


if (locationFilter) {
  locationFilter.addEventListener(
    "change",
    filterOpportunities
  );
}


filterOpportunities();