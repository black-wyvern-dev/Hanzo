import api from '../Config/baseApi';
import FormData from 'form-data';
import { Platform } from 'react-native';

const createFormData = (file, body = undefined) => {
  const data = new FormData();
  data.append('chatres', {
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

export const postChatRes = (file, onUploadProgress, token = '') => {
  console.log('request for file post: ');

  const formData = createFormData(file);
  // console.log(formData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return api
    .post('api/fileupload', formData, config,
  )
    .then((resp) => {
      console.log('Post Shill success :')
      console.log(resp.data);
      return {
        data: resp.data
      };
    })
    .catch((error) => {
      console.log('Post Shill Axios Error :' + error.message);
      return { errors: 'Post Shill failure: ' + error.message };
    });
};
