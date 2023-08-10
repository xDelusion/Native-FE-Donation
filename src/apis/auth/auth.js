import instance from "../index";

const login = async (userInfo) => {
  const res = await instance.post("/auth/login", userInfo);

  console.log(res.data);
  return res.data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  const isEmp = "isEmp";
  const emp_no = "emp_no";

  for (const key in userInfo) {
    if (key !== "image") {
      formData.append(key, userInfo[key]);
    }
  }
  if (
    userInfo[isEmp] === undefined ||
    userInfo[isEmp] === null ||
    userInfo[isEmp] === "" ||
    userInfo[emp_no] === undefined ||
    userInfo[emp_no] === null ||
    userInfo[emp_no] === ""
  ) {
    formData.append("isEmp", false);
  }
  formData.append("heroList", false);
  formData.append("noOfDonations", 0);
  formData.append("isDonor", false);

  const res = await instance.post("/auth/register/donor", formData);

  return res.data;
};

export { login, register };
