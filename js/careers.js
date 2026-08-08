const careerSearch =
  document.getElementById("careerSearch");

const careerCategoryFilter =
  document.getElementById("careerCategoryFilter");

const degreeFilter =
  document.getElementById("degreeFilter");

const careerCards =
  document.querySelectorAll(".career-card");

const careerResultCount =
  document.getElementById("careerResultCount");

const careerEmptyState =
  document.getElementById("careerEmptyState");


function filterCareers() {

  const searchValue =
    careerSearch
      ? careerSearch.value.toLowerCase().trim()
      : "";

  const categoryValue =
    careerCategoryFilter
      ? careerCategoryFilter.value
      : "all";

  const degreeValue =
    degreeFilter
      ? degreeFilter.value
      : "all";

  let visibleCount = 0;


  careerCards.forEach((card) => {

    const name =
      card.dataset.name.toLowerCase();

    const category =
      card.dataset.category;

    const degree =
      card.dataset.degree;


    const matchesSearch =
      name.includes(searchValue);

    const matchesCategory =
      categoryValue === "all" ||
      category === categoryValue;

    const matchesDegree =
      degreeValue === "all" ||
      degree === degreeValue;


    if (
      matchesSearch &&
      matchesCategory &&
      matchesDegree
    ) {

      card.style.display = "flex";

      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });


  if (careerResultCount) {

    careerResultCount.textContent =
      `Showing ${visibleCount} ${
        visibleCount === 1
          ? "career"
          : "careers"
      }`;

  }


  if (careerEmptyState) {

    careerEmptyState.style.display =
      visibleCount === 0
        ? "block"
        : "none";

  }

}


if (careerSearch) {
  careerSearch.addEventListener(
    "input",
    filterCareers
  );
}


if (careerCategoryFilter) {
  careerCategoryFilter.addEventListener(
    "change",
    filterCareers
  );
}


if (degreeFilter) {
  degreeFilter.addEventListener(
    "change",
    filterCareers
  );
}


filterCareers();