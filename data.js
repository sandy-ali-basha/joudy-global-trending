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
    jsonData = lines.slice(1).map((row) => {
      let obj = {};
      headers.forEach((header, index) => {
        let fixed = row[index].trim().replace(/^["'](.*)["']$/, "$1").replace(/""/g, '"');
        obj[header.trim()] = fixed;        
      });
      return obj;
    });

    const targetId = getIdFromUrl();
    if (targetId !== null) {
      post = jsonData.find((item) => item["id"] === targetId);
      console.log("Filtered row by ID:", post);

      // ✅ Now it's safe to use post.id or other post data here
      console.log(post.header);

      if (post) {
        $("#title").append(post.post_title);
        $("#post_header").append(post.header);
        $("#post_footer").append(post.footer);
        $("#body").append(post.body);
        $("#image1").attr("src", `./images/${post.image1}.jpg`);
        $("#image2").attr("src", `./images/${post.image2}.jpg`);
        $("#image3").attr("src", `./images/${post.image3}.jpg`);
        $("#image1").attr("alt", post.image1_alt);
        $("#image2").attr("alt", post.image2_alt);
        $("#image3").attr("alt", post.image3_alt);
        $("#category").append(post.category);
        document.title = post.post_title;

        let metaDesc = document.querySelector("meta[name='description']");
        if (!metaDesc) {
          metaDesc = document.createElement("meta");
          metaDesc.name = "description";
          document.head.appendChild(metaDesc);
        }
        let metaKeywords = document.querySelector("meta[name='keywords']");
        if (!metaKeywords) {
          metaKeywords = document.createElement("meta");
          metaKeywords.name = "keywords";
          document.head.appendChild(metaKeywords);
        }

        metaKeywords.content = post.Meta_Keywords;
        metaDesc.content = post.Meta_Desc; // or any field you want
      }
    }
  });
