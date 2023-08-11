import instance from "../index";

const getAllPaci = async () => {
  try {
    const { data } = await instance.get(`/paci`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { getAllPaci };
