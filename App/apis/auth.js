import api from '../Config/baseApi';

export const login = (email = '', password = '', token = '') => {
  // console.log(token);
  // console.log(email, password);
  return api
    .post('api/login', { email, password, token })
    .then((resp) => {
      let rspData = resp.data;
      // console.log(rspData);
      const data = rspData.auth;
      const token = rspData.token;
      console.log('responsed data : ', rspData);
      return {
        data,
        token,
      };
    })
    .catch((error) => {
      console.log('Axios Error :' + error.message);
      return { errors: 'ERROR: ' + error.message };
    });
};

export const register = ({ email = '', password = '', firstName = '', lastName = '' }) => {
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
      if (resp.data.success) logo = resp.data.logo;
      console.log('okok' + logo);
      return {
        logo,
      };
    })
    .catch((error) => {
      console.log('Axios Error :' + error.message);
      return { errors: 'ERROR: ' + error.message };
    });
};
