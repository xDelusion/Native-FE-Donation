import instance from "../index";

const Login = async (userInfo) => {
  const res = await instance.post("/auth/login", userInfo);

  console.log(res.data);
  return res.data;
};

const register = async (userInfo) => {
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
  const res = await instance.post("/auth/register", formData);

  return res.data;
};

export { Login, register };
