/* =========================
   AEROSPACE CAREER DATA
========================= */

const careers = [

  {
    title: "Aerospace Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: ["aviation", "space", "defense", "research"],
    sectorLabels: ["Aviation", "Space", "Defense", "Research"],
    summary:
      "Designs, develops and tests aircraft, spacecraft, satellites, missiles and other aerospace systems.",
    typicalWork:
      "Aircraft & spacecraft design",
    educationText:
      "Bachelor's in aerospace or related engineering",
    compensation:
      "$134,830 median",
    compensationSource:
      "BLS Aerospace Engineers, May 2024",
    skills: [
      "Aerodynamics",
      "CAD",
      "Systems",
      "Testing"
    ]
  },

  {
    title: "Aerodynamics Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's / Master's",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "research"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Defense",
      "Research"
    ],
    summary:
      "Studies airflow around aircraft, spacecraft, rockets and components to improve performance, efficiency and stability.",
    typicalWork:
      "Fluid flow & aerodynamic performance",
    educationText:
      "Aerospace or mechanical engineering",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "CFD",
      "Fluid Mechanics",
      "Wind Tunnels",
      "MATLAB"
    ]
  },

  {
    title: "Propulsion Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's / Master's",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "research"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Defense",
      "Research"
    ],
    summary:
      "Develops rocket engines, jet engines and propulsion systems that generate thrust for aircraft and spacecraft.",
    typicalWork:
      "Engines & propulsion systems",
    educationText:
      "Aerospace or mechanical engineering",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "Thermodynamics",
      "Combustion",
      "Fluid Mechanics",
      "Testing"
    ]
  },

  {
    title: "Avionics Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "space",
      "satellites",
      "defense"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Satellites",
      "Defense"
    ],
    summary:
      "Designs and integrates electronic systems used for communication, navigation, sensing, computing and flight control.",
    typicalWork:
      "Electronics & flight systems",
    educationText:
      "Electrical, electronics or aerospace engineering",
    compensation:
      "$127,590 benchmark",
    compensationSource:
      "Closest BLS benchmark: Electronics Engineers",
    skills: [
      "Electronics",
      "Embedded Systems",
      "Navigation",
      "Testing"
    ]
  },

  {
    title: "Guidance, Navigation & Control Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's / Master's",
    sectors: [
      "space",
      "launch",
      "satellites",
      "defense",
      "aviation"
    ],
    sectorLabels: [
      "Space",
      "Launch",
      "Satellites",
      "Defense",
      "Aviation"
    ],
    summary:
      "Develops algorithms that allow aircraft, rockets and spacecraft to determine position, orientation and desired motion.",
    typicalWork:
      "Navigation & control algorithms",
    educationText:
      "Engineering; graduate study often useful",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "Controls",
      "MATLAB",
      "Simulation",
      "Kalman Filters"
    ]
  },

  {
    title: "Aerospace Systems Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "space",
      "launch",
      "satellites",
      "defense"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Satellites",
      "Defense"
    ],
    summary:
      "Coordinates complex aerospace systems and ensures mechanical, electrical, software and mission components work together.",
    typicalWork:
      "Systems integration",
    educationText:
      "Engineering or related technical degree",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "Requirements",
      "Architecture",
      "Integration",
      "Verification"
    ]
  },

  {
    title: "Structural Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "manufacturing"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Defense",
      "Manufacturing"
    ],
    summary:
      "Analyzes aerospace structures to ensure they can withstand aerodynamic loads, vibration, pressure, temperature and launch forces.",
    typicalWork:
      "Structures & stress analysis",
    educationText:
      "Aerospace, mechanical or structural engineering",
    compensation:
      "$102,320 benchmark",
    compensationSource:
      "Closest BLS benchmark: Mechanical Engineers",
    skills: [
      "FEA",
      "Stress Analysis",
      "CAD",
      "Structures"
    ]
  },

  {
    title: "Materials Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters", "phd"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "manufacturing",
      "research"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Manufacturing",
      "Research"
    ],
    summary:
      "Develops and evaluates metals, composites, ceramics and other materials used in demanding aerospace environments.",
    typicalWork:
      "Advanced aerospace materials",
    educationText:
      "Materials science or engineering",
    compensation:
      "$108,310 median",
    compensationSource:
      "BLS Materials Engineers, May 2024",
    skills: [
      "Composites",
      "Metallurgy",
      "Testing",
      "Failure Analysis"
    ]
  },

  {
    title: "Satellite Engineer",
    category: "engineering",
    categoryLabel: "Engineering",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: [
      "space",
      "satellites",
      "defense"
    ],
    sectorLabels: [
      "Space",
      "Satellites",
      "Defense"
    ],
    summary:
      "Designs and integrates satellite subsystems such as power, communications, thermal control, structures and attitude control.",
    typicalWork:
      "Satellite subsystem design",
    educationText:
      "Aerospace, electrical or mechanical engineering",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "Spacecraft",
      "Power Systems",
      "Thermal",
      "Integration"
    ]
  },

  {
    title: "Flight Test Engineer",
    category: "operations",
    categoryLabel: "Flight & Operations",
    education: ["bachelors"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "defense",
      "research"
    ],
    sectorLabels: [
      "Aviation",
      "Defense",
      "Research"
    ],
    summary:
      "Plans flight tests, collects aircraft performance data and evaluates whether systems meet design and safety requirements.",
    typicalWork:
      "Aircraft testing & analysis",
    educationText:
      "Aerospace or related engineering",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "Flight Testing",
      "Data Analysis",
      "Safety",
      "Instrumentation"
    ]
  },

  {
    title: "Mission Analyst",
    category: "science",
    categoryLabel: "Science & Research",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's / Master's",
    sectors: [
      "space",
      "satellites",
      "research"
    ],
    sectorLabels: [
      "Space",
      "Satellites",
      "Research"
    ],
    summary:
      "Evaluates spacecraft trajectories, orbital mechanics, mission requirements, launch windows and operational scenarios.",
    typicalWork:
      "Mission & trajectory planning",
    educationText:
      "Aerospace engineering, physics or applied math",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "Orbital Mechanics",
      "MATLAB",
      "Simulation",
      "Optimization"
    ]
  },

  {
    title: "Aerospace Research Scientist",
    category: "science",
    categoryLabel: "Science & Research",
    education: ["masters", "phd"],
    educationLabel: "Master's / Ph.D.",
    sectors: [
      "aviation",
      "space",
      "launch",
      "research"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Research"
    ],
    summary:
      "Conducts advanced research in aerodynamics, propulsion, materials, autonomy, structures or other aerospace technologies.",
    typicalWork:
      "Research & experimentation",
    educationText:
      "Graduate degree often required",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Aerospace-engineering benchmark; varies by specialty",
    skills: [
      "Research",
      "Modeling",
      "Experiments",
      "Technical Writing"
    ]
  },

  {
    title: "Aerospace Software Engineer",
    category: "software",
    categoryLabel: "Software & Technology",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "space",
      "launch",
      "satellites",
      "defense"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Satellites",
      "Defense"
    ],
    summary:
      "Builds software for flight computers, spacecraft, simulations, mission systems and aerospace ground applications.",
    typicalWork:
      "Flight & mission software",
    educationText:
      "Computer science, software or engineering",
    compensation:
      "$133,080 median",
    compensationSource:
      "BLS Software Developers, May 2024",
    skills: [
      "C++",
      "Python",
      "Algorithms",
      "Testing"
    ]
  },

  {
    title: "Embedded Systems Engineer",
    category: "software",
    categoryLabel: "Software & Technology",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "space",
      "satellites",
      "defense"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Satellites",
      "Defense"
    ],
    summary:
      "Develops low-level software and electronics that control sensors, actuators, flight computers and spacecraft hardware.",
    typicalWork:
      "Hardware-software integration",
    educationText:
      "Computer, electrical or software engineering",
    compensation:
      "$127,590–$133,080 benchmark",
    compensationSource:
      "BLS Electronics Engineers / Software Developers",
    skills: [
      "C",
      "C++",
      "Microcontrollers",
      "Real-Time Systems"
    ]
  },

  {
    title: "Robotics & Autonomy Engineer",
    category: "software",
    categoryLabel: "Software & Technology",
    education: ["bachelors", "masters", "phd"],
    educationLabel: "Bachelor's / Master's",
    sectors: [
      "space",
      "aviation",
      "satellites",
      "defense",
      "research"
    ],
    sectorLabels: [
      "Space",
      "Aviation",
      "Defense",
      "Research"
    ],
    summary:
      "Develops autonomous systems for drones, aircraft, spacecraft, planetary robots and other intelligent aerospace platforms.",
    typicalWork:
      "Autonomous aerospace systems",
    educationText:
      "Robotics, CS, electrical or aerospace engineering",
    compensation:
      "$133,080 benchmark",
    compensationSource:
      "Closest BLS benchmark: Software Developers",
    skills: [
      "Robotics",
      "Computer Vision",
      "Controls",
      "Python"
    ]
  },

  {
    title: "Spacecraft Operations Engineer",
    category: "operations",
    categoryLabel: "Flight & Operations",
    education: ["bachelors"],
    educationLabel: "Bachelor's+",
    sectors: [
      "space",
      "satellites"
    ],
    sectorLabels: [
      "Space",
      "Satellites"
    ],
    summary:
      "Monitors spacecraft health, executes mission procedures, responds to anomalies and supports daily spacecraft operations.",
    typicalWork:
      "Mission control",
    educationText:
      "Engineering, physics or related STEM degree",
    compensation:
      "$134,830 benchmark",
    compensationSource:
      "Closest BLS benchmark: Aerospace Engineers",
    skills: [
      "Mission Operations",
      "Telemetry",
      "Troubleshooting",
      "Procedures"
    ]
  },

  {
    title: "Aerospace Engineering Technician",
    category: "technical",
    categoryLabel: "Manufacturing & Technical",
    education: ["associate"],
    educationLabel: "Associate / Technical",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "manufacturing"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Manufacturing"
    ],
    summary:
      "Supports engineers by installing, operating, maintaining and testing equipment used to develop aerospace vehicles and systems.",
    typicalWork:
      "Testing & technical support",
    educationText:
      "Associate degree or technical training",
    compensation:
      "$79,830 median",
    compensationSource:
      "BLS Aerospace Engineering & Operations Technicians",
    skills: [
      "Instrumentation",
      "Testing",
      "Maintenance",
      "Troubleshooting"
    ]
  },

  {
    title: "Aerospace Manufacturing Engineer",
    category: "technical",
    categoryLabel: "Manufacturing & Technical",
    education: ["bachelors"],
    educationLabel: "Bachelor's",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "manufacturing"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Manufacturing"
    ],
    summary:
      "Develops and improves processes used to manufacture aircraft, spacecraft, engines and aerospace components.",
    typicalWork:
      "Production & process engineering",
    educationText:
      "Mechanical, industrial or manufacturing engineering",
    compensation:
      "$101,140 benchmark",
    compensationSource:
      "Closest BLS benchmark: Industrial Engineers",
    skills: [
      "Lean Manufacturing",
      "CAD",
      "Quality",
      "Production"
    ]
  },

  {
    title: "Aerospace Quality Engineer",
    category: "technical",
    categoryLabel: "Manufacturing & Technical",
    education: ["bachelors"],
    educationLabel: "Bachelor's",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "manufacturing"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Defense",
      "Manufacturing"
    ],
    summary:
      "Ensures aerospace parts, manufacturing processes and systems meet engineering specifications and quality standards.",
    typicalWork:
      "Quality assurance & compliance",
    educationText:
      "Engineering or related technical degree",
    compensation:
      "$101,140 benchmark",
    compensationSource:
      "Closest BLS benchmark: Industrial Engineers",
    skills: [
      "Quality Systems",
      "Inspection",
      "Root Cause Analysis",
      "Standards"
    ]
  },

  {
    title: "Aircraft Maintenance Technician",
    category: "technical",
    categoryLabel: "Manufacturing & Technical",
    education: ["associate"],
    educationLabel: "Technical / Certification",
    sectors: [
      "aviation"
    ],
    sectorLabels: [
      "Aviation"
    ],
    summary:
      "Inspects, maintains and repairs aircraft systems to keep aircraft safe, operational and compliant with aviation requirements.",
    typicalWork:
      "Aircraft maintenance",
    educationText:
      "Technical training and applicable FAA certification",
    compensation:
      "Varies by certification",
    compensationSource:
      "Use current BLS aircraft mechanic data when updating",
    skills: [
      "Maintenance",
      "Inspection",
      "Troubleshooting",
      "Aircraft Systems"
    ]
  },

  {
    title: "Technical Program Manager",
    category: "business",
    categoryLabel: "Business & Management",
    education: ["bachelors", "masters"],
    educationLabel: "Bachelor's+",
    sectors: [
      "aviation",
      "space",
      "launch",
      "satellites",
      "defense",
      "manufacturing"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Satellites",
      "Defense"
    ],
    summary:
      "Coordinates aerospace programs across engineering teams, schedules, budgets, customers, risks and technical milestones.",
    typicalWork:
      "Program leadership",
    educationText:
      "Engineering, business or related degree",
    compensation:
      "Varies by seniority",
    compensationSource:
      "Management compensation varies widely by role",
    skills: [
      "Leadership",
      "Scheduling",
      "Budgeting",
      "Communication"
    ]
  },

  {
    title: "Aerospace Supply Chain Specialist",
    category: "business",
    categoryLabel: "Business & Management",
    education: ["bachelors"],
    educationLabel: "Bachelor's",
    sectors: [
      "aviation",
      "space",
      "launch",
      "defense",
      "manufacturing"
    ],
    sectorLabels: [
      "Aviation",
      "Space",
      "Launch",
      "Manufacturing"
    ],
    summary:
      "Coordinates suppliers, purchasing, logistics and materials needed to manufacture and support aerospace systems.",
    typicalWork:
      "Suppliers & aerospace logistics",
    educationText:
      "Supply chain, business, engineering or operations",
    compensation:
      "Varies by role",
    compensationSource:
      "Depends on logistics, purchasing and management occupation",
    skills: [
      "Procurement",
      "Logistics",
      "Planning",
      "Supplier Management"
    ]
  }

];


/* =========================
   PAGE ELEMENTS
========================= */

const careersGrid =
  document.getElementById("careersGrid");

const careerSearch =
  document.getElementById("careerSearch");

const careerCategoryFilter =
  document.getElementById("careerCategoryFilter");

const careerDegreeFilter =
  document.getElementById("degreeFilter");

const careerSectorFilter =
  document.getElementById("sectorFilter");

const careerAreaTabs =
  document.querySelectorAll(".career-area-tab");

const careerResultCount =
  document.getElementById("careerResultCount");

const careerEmptyState =
  document.getElementById("careerEmptyState");

const careerDirectoryTitle =
  document.getElementById("careerDirectoryTitle");


let selectedCareerCategory =
  "all";


/* =========================
   CREATE CAREER CARD
========================= */

function createCareerCard(career) {

  const skillsHTML =
    career.skills
      .map(
        skill =>
          `<span>${skill}</span>`
      )
      .join("");


  const sectorsHTML =
    career.sectorLabels
      .map(
        sector =>
          `<span>${sector}</span>`
      )
      .join("");


  return `

    <article class="career-card">

      <div class="career-top">

        <div class="career-badges">

          <span class="career-area">
            ${career.categoryLabel}
          </span>

          <span class="career-data-badge">
            Career Profile
          </span>

        </div>

        <span class="career-degree">
          ${career.educationLabel}
        </span>

      </div>


      <h3>
        ${career.title}
      </h3>


      <p class="career-summary">
        ${career.summary}
      </p>


      <div class="career-details">

        <div class="career-detail-item">

          <span class="career-detail-label">
            Typical Work
          </span>

          <strong>
            ${career.typicalWork}
          </strong>

        </div>


        <div class="career-detail-item">

          <span class="career-detail-label">
            Education
          </span>

          <strong>
            ${career.educationText}
          </strong>

        </div>

      </div>


      <div class="career-compensation">

        <span class="career-compensation-label">
          U.S. Compensation Benchmark
        </span>

        <strong>
          ${career.compensation}
        </strong>

        <p>
          ${career.compensationSource}
        </p>

      </div>


      <p class="career-skills-title">
        Useful Skills
      </p>


      <div class="career-tags">
        ${skillsHTML}
      </div>


      <p class="career-skills-title">
        Common Aerospace Sectors
      </p>


      <div class="career-sector-list">
        ${sectorsHTML}
      </div>

    </article>

  `;

}


/* =========================
   FILTER CAREERS
========================= */

function filterCareers() {

  const searchValue =
    careerSearch
      ? careerSearch.value
          .toLowerCase()
          .trim()
      : "";


  const categoryValue =
    careerCategoryFilter
      ? careerCategoryFilter.value
      : "all";


  const degreeValue =
    careerDegreeFilter
      ? careerDegreeFilter.value
      : "all";


  const sectorValue =
    careerSectorFilter
      ? careerSectorFilter.value
      : "all";


  const filteredCareers =
    careers.filter(career => {

      const searchableText =
        [
          career.title,
          career.categoryLabel,
          career.summary,
          career.typicalWork,
          career.educationText,
          ...career.skills,
          ...career.sectorLabels
        ]
          .join(" ")
          .toLowerCase();


      const matchesSearch =
        searchableText.includes(
          searchValue
        );


      const matchesTab =
        selectedCareerCategory === "all" ||
        career.category ===
          selectedCareerCategory;


      const matchesCategory =
        categoryValue === "all" ||
        career.category ===
          categoryValue;


      const matchesEducation =
        degreeValue === "all" ||
        career.education.includes(
          degreeValue
        );


      const matchesSector =
        sectorValue === "all" ||
        career.sectors.includes(
          sectorValue
        );


      return (
        matchesSearch &&
        matchesTab &&
        matchesCategory &&
        matchesEducation &&
        matchesSector
      );

    });


  renderCareers(
    filteredCareers
  );

}


/* =========================
   RENDER CAREERS
========================= */

function renderCareers(careerList) {

  if (!careersGrid) {
    return;
  }


  careersGrid.innerHTML =
    careerList
      .map(createCareerCard)
      .join("");


  if (careerResultCount) {

    careerResultCount.textContent =
      `Showing ${careerList.length} ${
        careerList.length === 1
          ? "career"
          : "careers"
      }`;

  }


  if (careerEmptyState) {

    careerEmptyState.style.display =
      careerList.length === 0
        ? "block"
        : "none";

  }

}


/* =========================
   CAREER AREA TABS
========================= */

careerAreaTabs.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        careerAreaTabs.forEach(
          tab => {

            tab.classList.remove(
              "active-career-tab"
            );

          }
        );


        button.classList.add(
          "active-career-tab"
        );


        selectedCareerCategory =
          button.dataset
            .careerCategory ||
          "all";


        if (
          careerCategoryFilter
        ) {

          careerCategoryFilter.value =
            "all";

        }


        updateCareerTitle();

        filterCareers();

      }
    );

  }
);


/* =========================
   UPDATE DIRECTORY TITLE
========================= */

function updateCareerTitle() {

  if (
    !careerDirectoryTitle
  ) {
    return;
  }


  const titles = {

    all:
      "Explore Career Paths",

    engineering:
      "Engineering Careers",

    software:
      "Software & Technology Careers",

    science:
      "Science & Research Careers",

    operations:
      "Flight & Operations Careers",

    technical:
      "Manufacturing & Technical Careers",

    business:
      "Business & Management Careers"

  };


  careerDirectoryTitle.textContent =
    titles[
      selectedCareerCategory
    ] ||
    "Explore Career Paths";

}


/* =========================
   FILTER EVENTS
========================= */

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


if (careerDegreeFilter) {

  careerDegreeFilter.addEventListener(
    "change",
    filterCareers
  );

}


if (careerSectorFilter) {

  careerSectorFilter.addEventListener(
    "change",
    filterCareers
  );

}


/* =========================
   INITIAL LOAD
========================= */

renderCareers(careers);