const guidanceForm =
  document.getElementById("guidanceForm");

const formStatus =
  document.getElementById("formStatus");


if (guidanceForm) {

  guidanceForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      if (!guidanceForm.checkValidity()) {

        guidanceForm.reportValidity();

        return;

      }


      if (formStatus) {

        formStatus.textContent =
          "Thank you. Your form is working correctly in the website preview. We will connect it to a real submission system before launch.";

      }

    }
  );

}