// header.js
function injectHeader() {
  const headerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol
        id="search"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 16 16">
        <path
          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 16 16">
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="nav-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 16 16">
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="navbar-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-right"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M18.719 6.781L17.28 8.22L24.063 15H4v2h20.063l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719z"
        />
      </symbol>
    </svg>

    <div id="preloader">
      <span class="loader"></span>
    </div>
  <header id="header" class="site-header text-black">
      <nav id="header-nav" class="navbar navbar-expand-lg px-3">
        <div class="container-fluid flex-wrap">
          <!-- Logo (mobile top center) -->
            <a class="navbar-brand order-2 order-lg-1" href="index.html">
              <img
                src="images/main-logo.png"
                class="logo"
                style="width: 6.25rem;"
                alt="global trending"
              />
            </a>
          <!-- Main nav links -->
          <div
            class="order-1 order-lg-3 d-flex justify-content-lg-start justify-content-center"
          >
          <div class="d-block mb-2 text-center">
            <div class="dropdown">
              <button
                class="navbar-toggler"
                type="button"
                id="categoryDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="images/menu.svg" style="width:3.125rem" />
              </button>
              <ul
                class="dropdown-menu w-100 text-center"
                aria-labelledby="categoryDropdown"
              >
  <li><a class="dropdown-item" href="./blog category.html?id=مصر">مصر</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=الخليج">الخليج</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=رياضة">رياضة</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=منوع">منوع</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=سوريا">سوريا</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=تكنولوجي">تكنولوجي</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=فن">فن</a></li>
              </ul>
            </div>
          </div>
            <ul
              class="navbar-nav d- flex-row w-100 text-capitalize align-items-center flex-wrap pe-md-3 pe-1"
            >
              <li class="nav-item">
                <a class="nav-link me-md-4 me-2" href="index.html">الرئيسية</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link me-md-4 me-2"
                  href="./blog-classic.html"
                  >المدونة</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link me-md-4 me-2" href="./sections.html"
                  >الاقسام</a
                >
              </li>
            </ul>
          </div>

          <!-- Categories section: dropdown on mobile, inline on desktop -->
          <div class="order-3 order-lg-2">
            <!-- Mobile Dropdown -->
           

            <!-- Desktop inline categories -->
            <ul
              class="list-unstyled mb-0 d-none d-lg-flex flex-wrap justify-content-lg-end text-hover"
            >
             <li><a class="dropdown-item" href="./blog category.html?id=مصر">مصر</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=الخليج">الخليج</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=رياضة">رياضة</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=منوع">منوع</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=سوريا">سوريا</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=تكنولوجي">تكنولوجي</a></li>
  <li><a class="dropdown-item" href="./blog category.html?id=فن">فن</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
}

// Call it when DOM is ready
document.addEventListener("DOMContentLoaded", injectHeader);
