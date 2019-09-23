const userPhoto = {
  "1": {
    src: "../assets/images/person_1.jpg"
  },
  "2": {
    src: "../assets/images/person_2.jpg"
  },
  "3": {
    src: "../assets/images/person_3.jpg"
  }
};

const getUserImgById = userId => {
  return userPhoto[userId].src;
};

const getCarouselData = ({
  usersData,
  usersPostData,
  quantityElementsToShow
}) => {
  const carouselData = usersData.slice(0, quantityElementsToShow);

  usersPostData.filter(({ userId, body }) => {
    carouselData.forEach(({ id, post }, index) => {
      if (userId === id && !post) {
        carouselData[index] = {
          ...carouselData[index],
          post: body,
          picture: getUserImgById(userId)
        };
      }
    });
  });

  return carouselData;
};

renderPager = carouselItems => {
  const circularPagerItems = carouselItems.map(
    ({ id }) => `<a href="#slide${id}" class="circular-pager-item"></a>`
  );
  return `<div class="carousel-pager-container">${circularPagerItems}</div>`;
};

const renderCarousel = props => {
  const carouselData = getCarouselData({ ...props, quantityElementsToShow: 3 });
  console.log(carouselData);
  const testimonialsTag = document.querySelector("#testimonials");
  const carouselItems = carouselData.map(
    ({ name, post, picture, id }) => `
      <div id="#slide${id}" class="carousel-item-container">
        <img class="carousel-item-img" src=${picture}>
        <p class="carousel-paragraph">“${post}”</p>
        <h5 class="carousel-item-title">${name}</h5>
      </div>`
  );
  // console.log(carouselItems);
  testimonialsTag.innerHTML += `
  <div id="carouselContainer">
    ${carouselItems}
  </div>
  ${renderPager(carouselData)}
  `;
};
