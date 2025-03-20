  // Create a helper function to add elements to head
  function addHeadTag(tagName, attributes = {}, innerHTML = '') {
    const el = document.createElement(tagName);
    for (const key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
    if (innerHTML) el.innerHTML = innerHTML;
    document.head.appendChild(el);
  }

  // Title
  document.title = "global trending - تريند العالم";

  // Meta Tags
  addHeadTag("meta", { charset: "utf-8" });
  addHeadTag("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" });
  addHeadTag("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" });
  addHeadTag("meta", { name: "format-detection", content: "telephone=no" });
  addHeadTag("meta", { name: "apple-mobile-web-app-capable", content: "yes" });
  addHeadTag("meta", { name: "author", content: "جودي علي باشا" });
  addHeadTag("meta", {
    name: "robots",
    content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  });
  addHeadTag("meta", { name: "googlebot", content: "index, follow" });

  // Canonical Link
  addHeadTag("link", { rel: "canonical", href: "https://www.example.com/" });

  // Open Graph
  addHeadTag("meta", { property: "og:type", content: "website" });
  addHeadTag("meta", { property: "og:locale", content: "ar_AR" });
  addHeadTag("meta", { property: "og:title", content: "global trending - تريند العالم" });
  addHeadTag("meta", { property: "og:description", content: "منصة عربية متخصصة في عرض التريندات العالمية والأخبار الشائعة لحظة بلحظة." });
  addHeadTag("meta", { property: "og:url", content: "https://www.example.com/" });
  addHeadTag("meta", { property: "og:site_name", content: "global trending - تريند العالم" });
  addHeadTag("meta", { property: "og:image", content: "https://www.example.com/images/og-image.jpg" });

  // Twitter Cards
  addHeadTag("meta", { name: "twitter:card", content: "summary_large_image" });
  addHeadTag("meta", { name: "twitter:title", content: "global trending - تريند العالم" });
  addHeadTag("meta", { name: "twitter:description", content: "تابع آخر التريندات العالمية والعربية من مصدر موثوق." });
  addHeadTag("meta", { name: "twitter:image", content: "https://www.example.com/images/og-image.jpg" });
  addHeadTag("meta", { name: "twitter:site", content: "@your_twitter_handle" });
  addHeadTag("meta", { name: "twitter:creator", content: "@your_twitter_handle" });

  // Favicon & Apple Touch Icon
  addHeadTag("link", { rel: "icon", href: "favicon.ico", type: "image/x-icon" });
  addHeadTag("link", { rel: "apple-touch-icon", href: "apple-touch-icon.png" });

  // Stylesheets
  addHeadTag("link", { rel: "stylesheet", href: "css/bootstrap.min.css", type: "text/css" });
  addHeadTag("link", { rel: "stylesheet", href: "style.css", type: "text/css" });
  addHeadTag("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" });

  // Fonts
  addHeadTag("link", { rel: "preconnect", href: "https://fonts.googleapis.com" });
  addHeadTag("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" });
  addHeadTag("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap"
  });

  // Script Files
  addHeadTag("script", { src: "js/modernizr.js" });

  // Google AdSense
  addHeadTag("script", {
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2692091861283734",
    crossorigin: "anonymous"
  });