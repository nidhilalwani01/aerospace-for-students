const researchSearch =
  document.getElementById("researchSearch");

const researchLevelFilter =
  document.getElementById("researchLevelFilter");

const researchTypeFilter =
  document.getElementById("researchTypeFilter");

const researchCards =
  document.querySelectorAll(".research-opportunity-card");

const researchResultCount =
  document.getElementById("researchResultCount");

const researchEmptyState =
  document.getElementById("researchEmptyState");


function filterResearch() {

  const searchValue =
    researchSearch
      ? researchSearch.value.toLowerCase().trim()
      : "";

  const levelValue =
    researchLevelFilter
      ? researchLevelFilter.value
      : "all";

  const typeValue =
    researchTypeFilter
      ? researchTypeFilter.value
      : "all";

  let visibleCount = 0;


  researchCards.forEach((card) => {

    const name =
      card.dataset.name.toLowerCase();

    const level =
      card.dataset.level;

    const type =
      card.dataset.type;


    const matchesSearch =
      name.includes(searchValue);

    const matchesLevel =
      levelValue === "all" ||
      level === levelValue ||
      level === "multiple";

    const matchesType =
      typeValue === "all" ||
      type === typeValue;


    if (
      matchesSearch &&
      matchesLevel &&
      matchesType
    ) {

      card.style.display = "flex";

      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });


  if (researchResultCount) {

    researchResultCount.textContent =
      `Showing ${visibleCount} ${
        visibleCount === 1
          ? "opportunity"
          : "opportunities"
      }`;

  }


  if (researchEmptyState) {

    researchEmptyState.style.display =
      visibleCount === 0
        ? "block"
        : "none";

  }

}


if (researchSearch) {
  researchSearch.addEventListener(
    "input",
    filterResearch
  );
}


if (researchLevelFilter) {
  researchLevelFilter.addEventListener(
    "change",
    filterResearch
  );
}


if (researchTypeFilter) {
  researchTypeFilter.addEventListener(
    "change",
    filterResearch
  );
}


filterResearch();