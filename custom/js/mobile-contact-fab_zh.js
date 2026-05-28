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
          聯絡我們
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
                  姓名*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabName"
                  name="name"
                  placeholder="您的姓名"
                  required
                />

                <div class="invalid-feedback">
                 請輸入您的姓名
                </div>
              </div>

              <div class="col-6 mb-3">
                <label
                  for="fabEmail"
                  class="form-label fw-bold text-white"
                >
                  電子信箱*
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
                  請輸入正確的信箱
                </div>
              </div>

              <div class="col-6 mb-3">
                <label
                  for="fabCompany"
                  class="form-label fw-bold text-white"
                >
                  公司*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabCompany"
                  name="company"
                  placeholder="公司名稱"
                  required
                />

                <div class="invalid-feedback">
                請輸入公司名稱
                </div>
              </div>

              <div class="col-6 mb-3">
                <label
                  for="fabCountry"
                  class="form-label fw-bold text-white"
                >
                  國家*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabCountry"
                  name="country"
                  placeholder="國家名稱"
                  required
                />

                <div class="invalid-feedback">
                 請填入國家名稱
                </div>
              </div>

              <div class="col-12 mb-3">
                <label
                  for="fabSubject"
                  class="form-label fw-bold text-white"
                >
                  主旨*
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="fabSubject"
                  name="subject"
                  placeholder="主旨"
                  required
                />

                <div class="invalid-feedback">
                 請輸入一個主旨
                </div>
              </div>

              <div class="col-12 mb-3">
                <label
                  for="fabMessage"
                  class="form-label fw-bold text-white"
                >
                  留言*
                </label>

                <textarea
                  class="form-control"
                  id="fabMessage"
                  name="message"
                  rows="4"
                  placeholder="留下訊息或意見"
                  required
                ></textarea>

                <div class="invalid-feedback">
                 請輸入您的訊息或寶貴意見
                </div>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary w-100"
                >
                  送出
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
