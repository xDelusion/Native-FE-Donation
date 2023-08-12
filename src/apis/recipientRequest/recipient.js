import instance from "../index";

const getRecipientReqs = async () => {
  try {
    const { data } = await instance.get(`/recipient`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getRecipientReqs };
