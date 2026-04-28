// Function to render links dynamically
function renderLinks(links) {
  const linkContainer = document.getElementById("linkContainer");
  links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank";
    linkElement.textContent = link.name;
    linkElement.dataset.show = link.show;
    linkElement.classList.add("link");

    linkElement.addEventListener("click", () => {
      if (linkElement.dataset.show === "true") {
        linkElement.style.display = "none";
        linkElement.dataset.show = "false";
      } else {
        linkElement.style.display = "block";
        linkElement.dataset.show = "true";
      }
    });

    linkContainer.appendChild(linkElement);
  });
}

// Initial links list
const links = [
  {
    name: "Ruby",
    url: "https://misterge-laoshi.global.ssl.fastly.net/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "PeteZah",
    url: "https://petezahgames.com/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "EliteGamez",
    url: "https://elite-gamez.github.io/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "PizaGame",
    url: "https://pizagame.com/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "Equinox",
    url: "https://joespinks.bridgemaker-drc.com",
    show: true
  },

// Render links dynamically
renderLinks(links);
