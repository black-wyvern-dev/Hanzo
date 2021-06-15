import api from '../Config/baseApi';

export const login = (email = '', password = '') => {
  console.log(email, password);
  return api
    .post('api/login', { email, password })
    .then((resp) => {
      let rspData = resp.data;
      if (!rspData || !rspData.success) {
        rspData = JSON.parse(resp.data.concat('}'));
        // console.log(rspData);
        // return {};
      }
      const data = rspData.success.auth;
      const token = rspData.success.token;
      const message = rspData.success.message;
      console.log('responsed data : ', rspData.success);
      return {
        data,
        message,
        token,
      };
    })
    .catch((error) => {
      console.log('Axios Error :' + error.message);
      return { errors: 'ERROR: ' + error.message };
    });
};

export const register = ({email = '', password = '', firstName = '', lastName = ''}) => {
  return api
    .post('api/register', { email, password, firstName, lastName, password_confirmation: password })
    .then((resp) => {
      let rspData = resp.data;
      if (!rspData || !rspData.success) {
        rspData = JSON.parse(resp.data.concat('}'));
        // console.log(rspData);
        // return {};
      }
      const token = rspData.success.token;
      console.log('responsed data : ', rspData.success);
      return {
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
