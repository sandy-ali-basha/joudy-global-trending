const sheetCSVUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT9-HWdojtG2cgx5ITPP-dhD5KhDHES8qAPtf5rlyJ11jp4jeBkdVd3x3S5QCyAbLPT_RGhPyTc7dMY/pub?output=csv";
let jsonData = [];
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

var post = null;

fetch(sheetCSVUrl)
  .then((res) => res.text())
  .then((csv) => {
    const lines = csv
      .trim()
      .split("\n")
      .map((row) => row.split(","));
    const headers = lines[0];

    jsonData = lines
      .slice(1)
      .map((row) => {
        let obj = {};
        headers.forEach((header, index) => {
          obj[header.trim()] = row[index]
            ? row[index].trim().replace(/^"(.*)"$/, "$1")
            : "";
        });
        return obj;
      })
      .reverse();
    const targetId = getIdFromUrl();

    const category = jsonData.filter(
      (item) => item.category && item.category.trim() === targetId
    );

    $(document).ready(function () {
      category.forEach((post) => {
        console.log("post", post);
        // Limit body to 20 words
        const bodySnippet =
          post.header.split(" ").slice(0, 20).join(" ") + "...";
        const postCard = `
          <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div class="card-item">
              <div class="card border-0">
                <div class="card-image">
                  <img src="./images/${post.image1}.jpg" alt="${post.image1_alt}" class="post-image img-fluid" style="height: 50vh; object-fit: cover;" />
                </div>
              </div>
              <div class="card-body p-0 mt-4">
                <h3 class="card-title text-capitalize">
                  <a href="blog post.html?id=${post.id}">${post.post_title}</a>
                </h3>
                <p>${bodySnippet}</p>
                <a href="blog post.html?id=${post.id}" class="btn btn-normal text-capitalize p-0"><em>عرض المزيد</em></a>
              </div>
            </div>
          </div>
        `;
        $("#post-grid").append(postCard);
      });
    });
  });
