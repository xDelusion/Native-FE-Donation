import instance from "../index"

const createDonorRequest = async (data) => {
   
    const res = await instance.post("/Request", data);
    return res.data;
  
}