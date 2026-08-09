const researchSearch =
  document.getElementById("researchSearch");

const researchLevelFilter =
  document.getElementById("researchLevelFilter");

const researchTypeFilter =
  document.getElementById("researchTypeFilter");

const researchAreaFilter =
  document.getElementById("researchAreaFilter");

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

  const areaValue =
    researchAreaFilter
      ? researchAreaFilter.value
      : "all";

  let visibleCount = 0;


  researchCards.forEach((card) => {

    const searchableText =
      (card.dataset.name || "").toLowerCase();

    const levels =
      (card.dataset.levels || "")
        .split(" ");

    const type =
      card.dataset.type || "";

    const areas =
      (card.dataset.areas || "")
        .split(" ");


    const matchesSearch =
      searchableText.includes(
        searchValue
      );

    const matchesLevel =
      levelValue === "all" ||
      levels.includes(levelValue);

    const matchesType =
      typeValue === "all" ||
      type === typeValue;

    const matchesArea =
      areaValue === "all" ||
      areas.includes(areaValue);


    if (
      matchesSearch &&
      matchesLevel &&
      matchesType &&
      matchesArea
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


if (researchAreaFilter) {

  researchAreaFilter.addEventListener(
    "change",
    filterResearch
  );

}


filterResearch();