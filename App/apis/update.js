import api from '../Config/baseApi';

export const update = (data = {}, token = '') => {
  console.log('send for update data: ', data);
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return api
    .post('api/polls', data, config)
    .then((resp) => {
      console.log('Poll success :');
      return {};
    })
    .catch((error) => {
      console.log('Poll Axios Error :' + error.message);
      return { errors: 'ERROR: ' + error.message };
    });
};

export const resend = (agent_id = {}, token = '') => {
  console.log('send for resend data: ', agent_id);
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return api
    .post('api/resend', agent_id, config)
    .then((resp) => {
      console.log('Resend success :');
      let rspData = resp.data;
      if (!rspData || !rspData.success) {
        // console.log(typeof(rspData));
        rspData = JSON.parse(resp.data.concat('}'));
        // console.log(rspData);
        // return {};
      }
      console.log('responsed data OK: '); //, rspData.success);
      const data = rspData.success.auth;
      const branch_name = rspData.success.branch_name;
      const company_info = rspData.success.company_info;
      const template = rspData.success.current_template;
      const survey = rspData.success.current_survey;
      const languages = rspData.success.languages;
      const questions = rspData.success.questions;
      const header_color = rspData.success.header_color;
      const footer_color = rspData.success.footer_color;
      const background_color = rspData.success.background_color;
      const ratings = rspData.success.ratings;
      const brands = rspData.success.brands;
      const message = rspData.success.message;
      return {
        data,
        branch_name,
        company_info,
        template,
        survey,
        header_color,
        footer_color,
        background_color,
        languages,
        questions,
        ratings,
        brands,
        message,
      };
    })
    .catch((error) => {
      console.log('Resend Axios Error :' + error.message);
      return { errors: 'Update failure: ' + error.message };
    });
};
