import * as api from '../api/api'


export const getStudentData = async () =>  {
   
    try {
        
        const { data } = await api.fetchStudentInfo();
        localStorage.setItem( 'studentData' , JSON.stringify( data ))

        
    } catch (error) {
        console.log(error)
    }
}

export const updateStudentData=  async(id , updatedData, studentInfo  ,history ) => {
    try {

        // api  request to update data
        const { data } = await api.updateStudentInfo(id , updatedData) 

        studentInfo = studentInfo.map((stu) => ( stu._id === id ? data : stu));
    
        alert("Data has been updated ! Refresh the page once to see changes!!")
        history.push('/')
  
    } catch (error) {
        console.log(error)
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