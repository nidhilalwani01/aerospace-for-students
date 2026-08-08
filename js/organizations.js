const organizationSearch =
  document.getElementById("organizationSearch");

const countryFilter =
  document.getElementById("countryFilter");

const organizationTypeFilter =
  document.getElementById("organizationTypeFilter");

const organizationCards =
  document.querySelectorAll(".organization-card");

const organizationResultCount =
  document.getElementById("organizationResultCount");

const organizationEmptyState =
  document.getElementById("organizationEmptyState");


function filterOrganizations() {

  const searchValue =
    organizationSearch
      ? organizationSearch.value.toLowerCase().trim()
      : "";

  const countryValue =
    countryFilter
      ? countryFilter.value
      : "all";

  const typeValue =
    organizationTypeFilter
      ? organizationTypeFilter.value
      : "all";

  let visibleCount = 0;


  organizationCards.forEach((card) => {

    const name =
      card.dataset.name.toLowerCase();

    const country =
      card.dataset.country;

    const type =
      card.dataset.type;


    const matchesSearch =
      name.includes(searchValue);

    const matchesCountry =
      countryValue === "all" ||
      country === countryValue;

    const matchesType =
      typeValue === "all" ||
      type === typeValue;


    if (
      matchesSearch &&
      matchesCountry &&
      matchesType
    ) {

      card.style.display = "flex";

      visibleCount++;

    } else {

      card.style.display = "none";

    }

  });


  if (organizationResultCount) {

    organizationResultCount.textContent =
      `Showing ${visibleCount} ${
        visibleCount === 1
          ? "organization"
          : "organizations"
      }`;

  }


  if (organizationEmptyState) {

    organizationEmptyState.style.display =
      visibleCount === 0
        ? "block"
        : "none";

  }

}


if (organizationSearch) {
  organizationSearch.addEventListener(
    "input",
    filterOrganizations
  );
}


if (countryFilter) {
  countryFilter.addEventListener(
    "change",
    filterOrganizations
  );
}


if (organizationTypeFilter) {
  organizationTypeFilter.addEventListener(
    "change",
    filterOrganizations
  );
}


filterOrganizations();
