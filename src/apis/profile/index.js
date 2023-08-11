import instance from "../index";

const getProfile = async () => {
  try {
    const { data } = await instance.get(`/profile`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getProfileById = async (id) => {
  try {
    const res = await instance.get(`/profile/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const updateProfile = async (userInfo) => {
  const formdata = new FormData();
  for (const key in userInfo) {
    if (key !== "image") {
      formdata.append(key, userInfo[key]);
    } else {
      if (userInfo.image?.includes("file://"))
        formdata.append("image", {
          name: userInfo.image,
          type: "image/jpeg",
          uri: userInfo.image,
        });
    }
  }

  const res = await instance.put(`/profile`, formdata);
  return res.data;
};

export { getProfile, updateProfile, getProfileById };