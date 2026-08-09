const opportunitySearch =
  document.getElementById("opportunitySearch");


const ageFilter =
  document.getElementById("ageFilter");


const locationFilter =
  document.getElementById("locationFilter");


const focusFilter =
  document.getElementById("focusFilter");


const opportunityCards =
  document.querySelectorAll(".opportunity-card");


const categoryButtons =
  document.querySelectorAll(".category-card");


const opportunityResultCount =
  document.getElementById("opportunityResultCount");


const opportunityEmptyState =
  document.getElementById("opportunityEmptyState");


const opportunityDirectoryTitle =
  document.getElementById("opportunityDirectoryTitle");



let selectedCategory = "all";



function filterOpportunities() {


  const searchValue =
    opportunitySearch
      ? opportunitySearch.value
          .toLowerCase()
          .trim()
      : "";


  const levelValue =
    ageFilter
      ? ageFilter.value
      : "all";


  const locationValue =
    locationFilter
      ? locationFilter.value
      : "all";


  const focusValue =
    focusFilter
      ? focusFilter.value
      : "all";


  let visibleCount = 0;



  opportunityCards.forEach((card) => {


    const searchableText =
      (
        card.dataset.name || ""
      ).toLowerCase();


    const category =
      card.dataset.category || "";


    const levels =
      (
        card.dataset.levels || ""
      ).split(" ");


    const location =
      card.dataset.location || "";


    const focus =
      (
        card.dataset.focus || ""
      ).split(" ");



    const matchesSearch =
      searchableText.includes(
        searchValue
      );


    const matchesCategory =
      selectedCategory === "all" ||
      category === selectedCategory;


    const matchesLevel =
      levelValue === "all" ||
      levels.includes(levelValue);


    const matchesLocation =
      locationValue === "all" ||
      location === locationValue;


    const matchesFocus =
      focusValue === "all" ||
      focus.includes(focusValue);



    if (
      matchesSearch &&
      matchesCategory &&
      matchesLevel &&
      matchesLocation &&
      matchesFocus
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


  button.addEventListener(
    "click",
    () => {


      categoryButtons.forEach(
        (item) => {

          item.classList.remove(
            "active-category"
          );

        }
      );


      button.classList.add(
        "active-category"
      );


      selectedCategory =
        button.dataset.category ||
        "all";



      if (
        opportunityDirectoryTitle
      ) {


        if (
          selectedCategory ===
          "competition"
        ) {


          opportunityDirectoryTitle
            .textContent =
            "Aerospace Competitions";


        } else if (
          selectedCategory ===
          "scholarship"
        ) {


          opportunityDirectoryTitle
            .textContent =
            "Aerospace Scholarships";


        } else if (
          selectedCategory ===
          "internship"
        ) {


          opportunityDirectoryTitle
            .textContent =
            "Aerospace Internships";


        } else {


          opportunityDirectoryTitle
            .textContent =
            "All Opportunities";


        }


      }


      filterOpportunities();


    }
  );


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



if (focusFilter) {


  focusFilter.addEventListener(
    "change",
    filterOpportunities
  );


}



filterOpportunities();