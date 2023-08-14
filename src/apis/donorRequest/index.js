import instance from "..";

const sendRequest = async (userAnswers) => {
  const res = await instance.post("/donor", {
    QA: userAnswers,
  });
  return res.data;
};

const updateDonorRequest = async (recipient_id, donor_id) => {
  const res = await instance.put(`/donor/${recipient_id}`);
  return res.data;
};

export { sendRequest, updateDonorRequest };

// const getAllRequest = async () => {
//   const res = await instance.get("/");
//   return res.data;
// };

// const getDonorRequestById = async (id) => {
//   const res = await instance.get(`/donorRequestId/${id}`);
//   return res.data;
// };

// const createDonorRequest = async (data) => {
//   const res = await instance.post("/", data);
//   return res.data;
// };

// export { getAllRequest, getDonorRequestById, createDonorRequest};
