import api from '../Config/baseApi';

export const getMusicList = (token = '') => {
  console.log('request for music list: ');
  // console.log(token);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return api
    .post('api/getmusiclist', {}, config)
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
      const data = rspData.success;
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

export const changeProfile = (data, token = '') => {

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return api
    .post('api/changeprofile', data, config)
    .then((resp) => {
      data = resp.data;
      return {
        data
      };
    })
    .catch((error) => {
      console.log('Post Shill Axios Error :' + error.message);
      return { errors: 'Post Shill failure: ' + error.message };
    });
}
const createFormData = (file, body = undefined) => {
  const data = new FormData();
  data.append('avatar', {
    name: file.name,
    uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
    type: 'image/*'
  });

  if (body)
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

  return data;
};

export const avatarUpload = (file, onUploadProgress, token = '') => {

  const formData = createFormData(file);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return api
    .post('api/avatarupload', formData, config,
  )
    .then((resp) => {
      return {
        avatarUrl: resp.data
      };
    })
    .catch((error) => {
      console.log('Update Avatar Axios Error :' + error.message);
      return { errorAvatar: 'Update Avatar failure: ' + error.message };
    });
}

export const changePassword = (data, token = '') => {

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return api
    .post('api/changepassword', data, config)
    .then((resp) => {
      data = resp.data;
      return {
        data
      };
    })
    .catch((error) => {
      console.log('Update Avatar Axios Error :' + error.message);
      return { errors: 'Update Avatar failure: ' + error.message };
    });
}