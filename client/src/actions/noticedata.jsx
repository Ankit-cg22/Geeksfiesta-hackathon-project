import * as api from '../api/api'


export const getNoticeData = async () =>  {
   
    try {
        
        const { data } = await api.fetchNoticeData();

        localStorage.setItem( 'noticeData' , JSON.stringify( data ))

        
    } catch (error) {
        console.log(error)
    }
}

export const createNotice = async (newNotice ,noticeData,setNoticeData ,history) => {
    try {

        const {data} = await api.createNotice(newNotice);
        // making  a post request to backend

        let temp = data;

        temp ={...temp , noticeData}

        console.log(temp)

        setNoticeData(temp)

        alert("Notice added , refresh the page to see changes!")

        history.push('/')
        

    } catch (error) {
        console.log({message : error.message})       
    }
}

export const updateNotice=  async(id , updatedData,noticeData,history ) => {
    try {

        // api  request to update data
        const { data } = await api.updateNotice(id , updatedData) 

        noticeData = noticeData.map((ntc) => ( ntc._id === id ? data : ntc));
    
        alert("Data has been updated ! Refresh the page once to see changes!!")
        history.push('/')
  
    } catch (error) {
        console.log(error)
    }
}

// delete
export const deleteNotice = async (id , history) => {
    try {
        await api.deleteNotice(id);

        alert("Notice deleted ! Refresh the page once to see changes!!")

        history.push('/')
       
    } catch (error) {
        console.log(error);
    }
}