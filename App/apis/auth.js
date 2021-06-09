import api from '../Config/baseApi';

export const login = (email = '', password = '') => {
  console.log(email, password);
  return api
    .post('api/login', { email, password })
    .then((resp) => {
      let rspData = resp.data;
      if (!rspData || !rspData.success) {
        // console.log(typeof(rspData));
        rspData = JSON.parse(resp.data.concat('}'));
        // console.log(rspData);
        // return {};
      }
      const data = rspData.success.auth;
      const token = rspData.success.token;
      // const branch_name = rspData.success.branch_name;
      // const company_info = rspData.success.company_info;
      // const template = rspData.success.current_template;
      // const survey = rspData.success.current_survey;
      // const header_color = rspData.success.header_color;
      // const footer_color = rspData.success.footer_color;
      // const background_color = rspData.success.background_color;
      // const questions = rspData.success.questions;
      // const languages = rspData.success.languages;
      // const ratings = rspData.success.ratings;
      // const brands = rspData.success.brands;
      const message = rspData.success.message;
      console.log('responsed data : ', rspData.success);
      return {
        data,
        // branch_name,
        // company_info,
        // template,
        // survey,
        // languages,
        // header_color,
        // footer_color,
        // background_color,
        // questions,
        // ratings,
        // brands,
        message,
        token,
      };
    })
    .catch((error) => {
      console.log('Axios Error :' + error.message);
      return { errors: 'ERROR: ' + error.message };
    });
};

export const logo_request = () => {
  return api
    .post('api/logo_request')
    .then((resp) => {
      let logo;
      if (resp.data.success) logo = resp.data.success.logo;
      console.log('okok'+logo);
      return {
        logo,
      };
    })
    .catch((error) => {
      console.log('Axios Error :' + error.message);
      return { errors: 'ERROR: ' + error.message };
    });
};
