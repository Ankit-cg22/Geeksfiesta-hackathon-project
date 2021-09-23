import axios from 'axios';

const baseURL = 'https://squad22-geeksfiesta.herokuapp.com';

export const fetchStudentInfo = () =>  axios.get(`${baseURL}/student-info`);
export const fetchNoticeData = () => axios.get(`${baseURL}/notice-board`);


export const updateStudentInfo = ( id , updatedData) => axios.patch(`${baseURL}/student-info/${id}`, updatedData) // /posts/id ;

export const createNotice = (newNotice) => axios.post(`${baseURL}/notice-board`, newNotice);
export const updateNotice = ( id , updatedData) => axios.patch(`${baseURL}/notice-board/${id}`, updatedData) // /posts/id ;
export const deleteNotice = (id) => axios.delete(`${baseURL}/notice-board/${id}`)


export const signUp = ( authFormData) => axios.post(`${baseURL}/auth/signup` , authFormData);
export const signIn = ( authFormData) => axios.post(`${baseURL}/auth/signin` ,  authFormData);
