const guidanceForm =
  document.getElementById("guidanceForm");

const formStatus =
  document.getElementById("formStatus");


if (guidanceForm) {

  guidanceForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();


      if (!guidanceForm.checkValidity()) {

        guidanceForm.reportValidity();

        return;

      }


      const submitButton =
        guidanceForm.querySelector(
          ".guidance-submit"
        );


      const originalButtonText =
        submitButton
          ? submitButton.textContent
          : "";


      if (submitButton) {

        submitButton.disabled = true;

        submitButton.textContent =
          "Submitting...";

      }


      if (formStatus) {

        formStatus.textContent =
          "Sending your guidance request...";

      }


      const formData =
        new FormData(
          guidanceForm
        );


      try {

        const response =
          await fetch(
            guidanceForm.action,
            {
              method: "POST",
              body: formData,
              headers: {
                Accept:
                  "application/json"
              }
            }
          );


        if (response.ok) {

          guidanceForm.reset();


          if (formStatus) {

            formStatus.textContent =
              "Thank you! Your guidance request has been submitted successfully. We will review the information you shared and respond when possible.";

            formStatus.classList.remove(
              "form-error"
            );

            formStatus.classList.add(
              "form-success"
            );

          }

        } else {

          if (formStatus) {

            formStatus.textContent =
              "We could not submit your request right now. Please try again in a moment.";

            formStatus.classList.remove(
              "form-success"
            );

            formStatus.classList.add(
              "form-error"
            );

          }

        }

      } catch (error) {

        if (formStatus) {

          formStatus.textContent =
            "There was a connection problem while submitting the form. Please check your internet connection and try again.";

          formStatus.classList.remove(
            "form-success"
          );

          formStatus.classList.add(
            "form-error"
          );

        }

      } finally {

        if (submitButton) {

          submitButton.disabled = false;

          submitButton.textContent =
            originalButtonText;

        }

      }

    }
  );

}