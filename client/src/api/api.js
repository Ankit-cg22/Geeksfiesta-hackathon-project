import axios from 'axios';

const baseURL = 'http://localhost:5000';

export const fetchStudentInfo = () =>  axios.get(`${baseURL}/student-info-data`);
export const fetchNoticeData = () => axios.get(`${baseURL}/notice-board-data`);

export const signUp = ( authFormData) => axios.post(`${baseURL}/auth/signup` , authFormData);
export const signIn = ( authFormData) => axios.post(`${baseURL}/auth/signin` ,  authFormData);

