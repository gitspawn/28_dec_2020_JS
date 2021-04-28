const delay = 300;
const user = {
  name: "Sara",
  email: "sara@mail.com",
  avatar:
    "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg",
};

const fetchUser = () => {
  return new Promise((resolve) => setTimeout(() => resolve(user), delay));
};

export default { fetchUser };
