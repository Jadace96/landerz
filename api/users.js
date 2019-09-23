const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchUsersPost = () =>
  fetch(`${BASE_URL}/posts`).then(response => response.json());

const fetchUsersData = (callbackAction = () => {}) =>
  fetch(`${BASE_URL}/users`)
    .then(response => response.json())
    .then(usersData => {
      fetchUsersPost().then(usersPostData => {
        if (usersData && usersPostData) {
          const props = {
            usersData,
            usersPostData
          };
          callbackAction(props);
        }
      });
    });
