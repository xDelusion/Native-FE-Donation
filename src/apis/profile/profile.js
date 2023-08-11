import instance from "../index";

const getAllUsers = async () => {
  try {
    const { data } = await instance.get(`/getusers`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { getAllUsers };

/api/paci
