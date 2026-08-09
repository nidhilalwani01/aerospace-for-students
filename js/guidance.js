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
          ? submitButton.textContent.trim()
          : "Submit Guidance Request";


      if (submitButton) {

        submitButton.disabled = true;

        submitButton.textContent =
          "Submitting...";

      }


      if (formStatus) {

        formStatus.classList.remove(
          "form-success",
          "form-error"
        );

        formStatus.textContent =
          "Sending your guidance request...";

      }


      const formData =
        new FormData(guidanceForm);


      try {

        const response =
          await fetch(
            guidanceForm.action,
            {
              method: "POST",
              body: formData,
              headers: {
                Accept: "application/json"
              }
            }
          );


        if (response.ok) {

          guidanceForm.reset();


          if (formStatus) {

            formStatus.classList.remove(
              "form-error"
            );

            formStatus.classList.add(
              "form-success"
            );

            formStatus.textContent =
              "Thank you! Your guidance request has been submitted successfully.";

          }

        } else {

          let errorMessage =
            "We could not submit your request right now. Please try again.";


          try {

            const responseData =
              await response.json();


            if (
              responseData &&
              responseData.errors &&
              responseData.errors.length > 0
            ) {

              errorMessage =
                responseData.errors
                  .map(
                    error =>
                      error.message
                  )
                  .join(" ");

            }

          } catch (error) {

            // Keep the default error message.

          }


          if (formStatus) {

            formStatus.classList.remove(
              "form-success"
            );

            formStatus.classList.add(
              "form-error"
            );

            formStatus.textContent =
              errorMessage;

          }

        }

      } catch (error) {

        if (formStatus) {

          formStatus.classList.remove(
            "form-success"
          );

          formStatus.classList.add(
            "form-error"
          );

          formStatus.textContent =
            "There was a connection problem while submitting the form. Please check your internet connection and try again.";

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