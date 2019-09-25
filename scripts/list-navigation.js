const listNavigationData = [
  {
    linkTo: "landing",
    text: "Home"
  },
  {
    linkTo: "features",
    text: "Features"
  },
  {
    linkTo: "blog",
    text: "Blog"
  },
  {
    linkTo: "aboutUs",
    text: "About Us"
  },
  {
    linkTo: "testimonials",
    text: "Testimonials"
  },
  {
    linkTo: "getInTouch",
    text: "Get In Touch"
  }
];

const onClickNavigationItem = itemIndex => {
  const navigationItemsElements = document.getElementsByClassName(
    "navigation-item"
  );
  Object.values(navigationItemsElements).forEach(element => {
    element.classList.remove("navigation-item-active");
  });
  navigationItemsElements[itemIndex].classList.add("navigation-item-active");
};

const renderListNavigation = () => {
  const menuElement = document.querySelector("#menu");
  const listNavigationElements = listNavigationData.map(
    ({ linkTo, text }, index) => `
    <a onclick="onClickNavigationItem(${index})" href="#${linkTo}"
    class="navigation-item ${index === 0 && "navigation-item-active"}">
      <li>${text}</li>
    </a>
    `
  );
  menuElement.innerHTML = listNavigationElements.join(" ");
};
