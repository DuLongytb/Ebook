const book = new St.PageFlip(document.getElementById("book"), {
  width: 600,
  height: 800,
  showCover: true,
});

book.loadFromHTML(document.querySelectorAll(".page"));
