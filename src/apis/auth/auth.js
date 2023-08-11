import instance from "../index";

const login = async (userInfo) => {
  const res = await instance.post("/auth/login", userInfo);

  console.log(res.data);
  return res.data;
};

const register = async (userInfo) => {
  console.log(`before if statement = ${userInfo.name}`);
  if (
    userInfo["isEmp"] === undefined ||
    userInfo["isEmp"] === null ||
    userInfo["isEmp"] === "" ||
    userInfo["emp_no"] === undefined ||
    userInfo["emp_no"] === null ||
    userInfo["emp_no"] === ""
  ) {
    userInfo = {
      ...userInfo,
      isEmp: false,
    };
  }
  console.log(`before setting up isEmp = ${userInfo.name}`);
  userInfo = { ...userInfo, isDonor: false, heroList: false, noOfDonations: 0 };

  console.log(`
    ${userInfo.name},
    ${userInfo.isEmp},
      ${userInfo.emp_no},
      ${userInfo.email},
      ${userInfo.password},
      ${userInfo.heroList},
      ${userInfo.noOfDonations},
      ${userInfo.isDonor}
      `);

  const res = await instance.post("/auth/register/donor", userInfo);

  return res.data;
};

export { login, register };
