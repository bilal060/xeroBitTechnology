import axios from "axios";

const url = process.env.API_URL || "http://localhost:3500";
const CallAPI = async (data: any) => {
  try {
    return await axios
      .get(`${url}/${data}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      })
      .finally(function () { });
  } catch (error) {
    console.error(error);
  }
};

export default CallAPI;
