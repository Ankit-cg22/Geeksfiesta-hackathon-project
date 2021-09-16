import * as api from '../api/api'

export const getStudentInfo =async (setStudentInfo)  => {
    
    try {
        const {data} =  await api.fetchStudentInfo();
        setStudentInfo(data)
    } catch (error) {
        console.log(error.message);
    }
}

export const getNoticeData =async (setNoticeData)  => {
    
    try {
        const {data} =  await api.fetchNoticeData();
        setNoticeData(data)
    } catch (error) {
        console.log(error.message);
    }
}



