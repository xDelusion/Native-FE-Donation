import instance from "../index";

const signIn = async (userInfo) => {
  const res = await instance.post("/users/auth/signin", userInfo);

  console.log(res.data);
  return res.data;
};

const signUp = async (userInfo) => {
  const formData = new FormData();

  for (const key in userInfo) {
    if (key !== "image") {
      formData.append(key, userInfo[key]);
    }
  }

  formData.append("image", {
    name: userInfo.image,
    type: "image/jpeg",
    uri: userInfo.image,
  });
  const res = await instance.post("/users/auth/signup", formData);

  return res.data;
};

export { signUp, signIn };