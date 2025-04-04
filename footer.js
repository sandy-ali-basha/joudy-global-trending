// footer.js
function injectFooter() {
  const footerHTML = `
    <footer id="footer" class="overflow-hidden padding-large">
      <div class="container-fluid">
        <div class="row">
          <div class="row d-flex flex-wrap justify-content-between">
            <div class="col-lg-3 col-sm-6 pb-3 pe-4">
              <div class="footer-menu">
                <img src="images/main-logo.png" style="width: 200px;" alt="logo" class="pb-3" />
                <p>محركات البحث تدور ونحن نكتب!</p>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 pb-3">
                 <div class="footer-menu text-capitalize">
                 <h5 class="widget-title pb-2">روابط سريعة</h5>

                <ul class="menu-list list-unstyled text-capitalize">
                  <li class="menu-item pb-2">
                    <a href="#billboard">الرئيسية</a>
                  </li>
                  <li class="menu-item pb-2">
                    <a href="./about-us.html">عنا</a>
                  </li>
                  <li class="menu-item pb-2">
                    <a href="./privacypolicy.html">سياسة الخصوصية</a>
                  </li>
                  <li class="menu-item pb-2">
                     <a href="#latest-blog">المدونة</a>
                  </li>
                  <li class="menu-item pb-2">
                    <a href="./contact.html">تواصل معنا</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="footer-menu contact-item">
                <h5 class="widget-title text-capitalize pb-2">اتصل بنا</h5>
                <p><a href="mailto:alibashajoudy@gmail.com">alibashajoudy@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center ">
        جميع الحقوق محفوظة 2025 ©  
        <div class="mx-1">
        تم التطوير من قبل
        </div>
        <a class="mx-1" href="https://xyz-dev.vercel.app/">xyz</a>
        </div>
      </div>
    </footer>
   
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
}

// Call it when DOM is ready
document.addEventListener("DOMContentLoaded", injectFooter);
