window.generatePost = function () {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const image = document.getElementById('postImage').value;
    const metaDesc = document.getElementById('metaDescription').value;
    const metaKeywords = document.getElementById('metaKeywords').value;
  
    let relatedHTML = '';
    const articles = document.querySelectorAll('.related-article');
    articles.forEach(article => {
      const rTitle = article.querySelector('.related-title').value;
      const rImage = article.querySelector('.related-image').value;
      const rDesc = article.querySelector('.related-desc').value;
      const rLink = article.querySelector('.related-link').value;
  
      relatedHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
        <div class="card-item">
          <div class="card border-0">
            <div class="card-image">
              <img src="${rImage}" alt="image" class="post-image img-fluid" />
            </div>
          </div>
          <div class="card-body p-0 mt-4">
            <h3 class="card-title text-capitalize"><a href="${rLink}">${rTitle}</a></h3>
            <p>${rDesc}</p>
            <a href="${rLink}" class="btn btn-normal text-capitalize p-0"><em>اقرأ المزيد</em></a>
          </div>
        </div>
      </div>`;
    });
  
    const postHTML = `
  <!DOCTYPE html>
  <html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="${metaKeywords}">
    <title>${title}</title>
    <script src="./head.js"></script>
    <script src="./header.js"></script>
    <script src="./footer.js"></script>
  </head>
  <body>
    <div class="post-wrap padding-large overflow-hidden">
      <div class="container">
        <div class="row">
          <main>
            <article class="post-item">
              <div class="post-content">
                <div class="post-meta text-capitalize">
                  <span class="post-category">${new Date().toDateString()}</span> / <span class="meta-date">- تريند العالم</span>
                </div>
                <h1 style="text-align: right;">${title}</h1>
                <div class="hero-image col-lg-12 mt-5">
                  <img src="images/${image}.jpg" alt="post-image" class="img-fluid w-100" />
                </div>
              </div>
            </article>
            <div class="post-description padding-medium">${content}</div>
          </main>
        </div>
      </div>
    </div>
  
    <section id="related-posts" class="padding-large pt-5">
      <div class="container-fluid">
        <div class="row">
          <h2 class="display-4 text-dark text-capitalize">مقالات ذات صلة</h2>
          <div class="post-grid d-flex flex-wrap">${relatedHTML}</div>
        </div>
      </div>
    </section>
  
    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/script.js"></script>
  </body>
  </html>`;
  
    const blob = new Blob([postHTML], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${title.replace(/\s+/g, "_")}.html`;
    a.click();
  };
  
  window.addRelatedArticle = function () {
    const container = document.getElementById('relatedArticlesContainer');
    const template = `
      <div class="related-article">
        <hr>
        <label>عنوان:</label><input type="text" class="related-title form-control"><br>
        <label>رابط الصورة:</label><input type="text" class="related-image form-control"><br>
        <label>الشرح:</label><input type="text" class="related-desc form-control"><br>
        <label>الرابط:</label><input type="text" class="related-link form-control"><br><br>
      </div>`;
    container.insertAdjacentHTML('beforeend', template);
  };
  