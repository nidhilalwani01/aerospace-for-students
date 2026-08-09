const organizationSearch =
  document.getElementById("organizationSearch");

const countryFilter =
  document.getElementById("countryFilter");

const organizationTypeFilter =
  document.getElementById("organizationTypeFilter");

const focusFilter =
  document.getElementById("focusFilter");

const organizationCards =
  document.querySelectorAll(".organization-card");

const organizationViewTabs =
  document.querySelectorAll(".organization-view-tab");

const organizationResultCount =
  document.getElementById("organizationResultCount");

const organizationEmptyState =
  document.getElementById("organizationEmptyState");

const organizationDirectoryTitle =
  document.getElementById("organizationDirectoryTitle");


let selectedOrganizationSector = "all";


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

  const focusValue =
    focusFilter
      ? focusFilter.value.toLowerCase()
      : "all";

  let visibleCount = 0;


  organizationCards.forEach((card) => {

    const searchableText =
      (card.dataset.name || "").toLowerCase();

    const country =
      card.dataset.country || "";

    const type =
      card.dataset.type || "";

    const sector =
      card.dataset.sector || "";

    const focus =
      (card.dataset.focus || "").toLowerCase();


    const matchesSearch =
      searchableText.includes(searchValue);

    const matchesCountry =
      countryValue === "all" ||
      country === countryValue;

    const matchesType =
      typeValue === "all" ||
      type === typeValue;

    const matchesSector =
      selectedOrganizationSector === "all" ||
      sector === selectedOrganizationSector;

    const matchesFocus =
      focusValue === "all" ||
      focus.includes(focusValue);


    if (
      matchesSearch &&
      matchesCountry &&
      matchesType &&
      matchesSector &&
      matchesFocus
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
          ? "entry"
          : "entries"
      }`;

  }


  if (organizationEmptyState) {

    organizationEmptyState.style.display =
      visibleCount === 0
        ? "block"
        : "none";

  }

}


organizationViewTabs.forEach((button) => {

  button.addEventListener("click", () => {

    organizationViewTabs.forEach((tab) => {
      tab.classList.remove("active-view");
    });

    button.classList.add("active-view");

    selectedOrganizationSector =
      button.dataset.sector || "all";


    if (organizationDirectoryTitle) {

      if (selectedOrganizationSector === "government") {

        organizationDirectoryTitle.textContent =
          "National & Government Organizations";

      } else if (selectedOrganizationSector === "private") {

        organizationDirectoryTitle.textContent =
          "Privately Held Aerospace Companies";

      } else {

        organizationDirectoryTitle.textContent =
          "Organizations & Companies";

      }

    }


    if (organizationTypeFilter) {
      organizationTypeFilter.value = "all";
    }

    filterOrganizations();

  });

});


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


if (focusFilter) {

  focusFilter.addEventListener(
    "change",
    filterOrganizations
  );

}


filterOrganizations();