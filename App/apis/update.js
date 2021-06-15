import api from '../Config/baseApi';

export const getMusicList = (token = '') => {
  console.log('request for music list: ');
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return api
    .post('api/getmusiclist', config)
    .then((resp) => {
      console.log('GetMusicList success :');
      let rspData = resp.data;
      if (!rspData || !rspData.success) {
        // console.log(typeof(rspData));
        rspData = JSON.parse(resp.data.concat('}'));
        // console.log(rspData);
        // return {};
      }
      // console.log('responsed data OK: ', rspData.success.data);
      const data = rspData.success.data;
      return {
        data,
      };
    })
    .catch((error) => {
      console.log('GetMusicList Axios Error :' + error.message);
      return { errors: 'GetList failure: ' + error.message };
    });
};

export const getShillList = (token = '') => {
  console.log('request for shill list: ');
  // console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return api
    .post('api/getshilllist', config)
    .then((resp) => {
      console.log('GetShillList success :');
      let rspData = resp.data;
      if (!rspData || !rspData.success) {
        // console.log(typeof(rspData));
        rspData = JSON.parse(resp.data.concat('}'));
        // console.log(rspData);
        // return {};
      }
      console.log('responsed data OK: ', rspData.success.data);
      const data = rspData.success.data;
      return {
        data,
      };
    })
    .catch((error) => {
      console.log('GetShillList Axios Error :' + error.message);
      return { errors: 'GetList failure: ' + error.message };
    });
};

export const postShill = (data, token = '') => {
  console.log('request for shill post: ');
  console.log(data);
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return api
    .post('api/postshill', data, config)
    .then((resp) => {
      console.log('Post Shill success :');
      return {
      };
    })
    .catch((error) => {
      console.log('Post Shill Axios Error :' + error.message);
      return { errors: 'Post Shill failure: ' + error.message };
    });
};