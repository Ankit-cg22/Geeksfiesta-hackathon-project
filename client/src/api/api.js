import axios from 'axios';

const baseURL = 'https://squad22-geeksfiesta-project.herokuapp.com';

export const fetchStudentInfo = () =>  axios.get(`${baseURL}/student-info-data`);
export const fetchNoticeData = () => axios.get(`${baseURL}/notice-board-data`);
