// Custom script for search functionality
const input = document.getElementById("searchInput");

input.addEventListener("keyup", filterSubPages);

function filterSubPages() {
  const filter = input.value.toUpperCase();
  const subPages = document.getElementsByClassName("sub-page");

  for (let i = 0; i < subPages.length; i++) {
    const subPage = subPages[i];
    const text = subPage.textContent || subPage.innerText;
    if (text.toUpperCase().indexOf(filter) > -1) {
      subPage.style.display = "";
    } else {
      subPage.style.display = "none";
    }
  }
}
