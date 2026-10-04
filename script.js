(() => {
  const totalPages = 14;
  let currentPage = 1;

  const image = document.getElementById("manga-page");
  const label = document.getElementById("page-label");
  const count = document.getElementById("page-count");
  const progress = document.getElementById("progress");
  const buttons = [
    document.getElementById("prev"),
    document.getElementById("next"),
    document.getElementById("prev-bottom"),
    document.getElementById("next-bottom")
  ];

  function renderPage() {
    const filename = String(currentPage).padStart(3, "0") + ".jpg";
    image.src = `pages/${filename}`;
    image.alt = currentPage === 1
      ? "غلاف الفصل 133"
      : `صفحة ${currentPage} من الفصل 133`;
    label.textContent = currentPage === 1
      ? "الغلاف"
      : `الصفحة ${currentPage - 1}`;
    count.textContent = `${currentPage} / ${totalPages}`;
    progress.style.width = `${(currentPage / totalPages) * 100}%`;
    buttons[0].disabled = currentPage === 1;
    buttons[2].disabled = currentPage === 1;
    buttons[1].disabled = currentPage === totalPages;
    buttons[3].disabled = currentPage === totalPages;
    document.title = `كاغوراباتشي — ${currentPage}/${totalPages}`;
  }

  function previousPage() {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  buttons[0].addEventListener("click", previousPage);
  buttons[2].addEventListener("click", previousPage);
  buttons[1].addEventListener("click", nextPage);
  buttons[3].addEventListener("click", nextPage);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") nextPage();
    if (event.key === "ArrowRight") previousPage();
  });

  renderPage();
})();
