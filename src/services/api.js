import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-backend-five-eta.vercel.app/';

export const getAllProjects = async () => {
  try {
    const resuslt = await axios.get('/projects');

    return resuslt.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActualResume = async () => {
  try {
    const resuslt = await axios.get('/cv');

    return resuslt.data;
  } catch (error) {
    console.log(error);
  }
};
