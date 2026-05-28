document.addEventListener('DOMContentLoaded', () => {
  const fabHTML = `
    <!-- Floating Button -->
    <button
      class="btn btn-primary rounded-circle shadow contactFab d-sm-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#globalMobileContact"
      aria-controls="globalMobileContact"
    >
      <i class="bi bi-chat-dots-fill"></i>
    </button>

    <!-- Offcanvas -->
    <div
      class="offcanvas offcanvas-bottom h-auto"
      tabindex="-1"
      id="globalMobileContact"
      aria-labelledby="globalMobileContactLabel"
    >
      <div class="offcanvas-header border-bottom">
        <h5
          class="offcanvas-title fw-bold text-danger "
          id="globalMobileContactLabel"
        >
          Contact Us
        </h5>

        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
        <form
          action="https://formspree.io/f/mrejrpkj"
          method="POST"
          class="needs-validation"
          novalidate
        >
          <div class="priBlur-bg rounded-4 py-4 px-3">
            <div class="row">
              <div class="col-6 mb-3">
                <label
                  for="fabName"
                  class="form-label fw-bold text-white"
                >
                  Name*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabName"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <div class="invalid-feedback">
                  Please enter your name.
                </div>
              </div>

              <div class="col-6 mb-3">
                <label
                  for="fabEmail"
                  class="form-label fw-bold text-white"
                >
                  Email*
                </label>

                <input
                  type="email"
                  class="form-control"
                  id="fabEmail"
                  name="email"
                  placeholder="name@mailbox.com"
                  required
                />

                <div class="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>

              <div class="col-6 mb-3">
                <label
                  for="fabCompany"
                  class="form-label fw-bold text-white"
                >
                  Company*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabCompany"
                  name="company"
                  placeholder="Company Name"
                  required
                />

                <div class="invalid-feedback">
                  Please enter your company.
                </div>
              </div>

              <div class="col-6 mb-3">
                <label
                  for="fabCountry"
                  class="form-label fw-bold text-white"
                >
                  Country*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabCountry"
                  name="country"
                  placeholder="Country Name"
                  required
                />

                <div class="invalid-feedback">
                  Please enter your country.
                </div>
              </div>

              <div class="col-12 mb-3">
                <label
                  for="fabSubject"
                  class="form-label fw-bold text-white"
                >
                  Subject*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabSubject"
                  name="subject"
                  placeholder="Subject"
                  required
                />

                <div class="invalid-feedback">
                  Please enter a subject.
                </div>
              </div>

              <div class="col-12 mb-3">
                <label
                  for="fabMessage"
                  class="form-label fw-bold text-white"
                >
                  Message*
                </label>

                <textarea
                  class="form-control"
                  id="fabMessage"
                  name="message"
                  rows="4"
                  placeholder="Message Here"
                  required
                ></textarea>

                <div class="invalid-feedback">
                  Please enter your message.
                </div>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary w-100"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML('beforeend', fabHTML)
})
