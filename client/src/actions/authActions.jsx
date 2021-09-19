import * as api from '../api/api'


export const signUp = async ( authFormData , history , setCurrentUser) =>  {
    try {

        console.log( authFormData)
        
        // api call for backend
        const { data } = await api.signUp(authFormData);

        if(data.message !== "Success") alert(data.message)
           
         // setting data to local storage 
        localStorage.setItem( 'currentUser' , JSON.stringify( data ))

        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))

        // redirect to the homepage
        if(data.message === "Success") history.push('/')

    } catch (error) {
        console.log(error);
    }
}

export const signIn = async ( authFormData , history ,setCurrentUser ) =>  {
    try {
  
        // api call for backend
        const {  data  } = await api.signIn(authFormData);

        if(data.message !== "Success") alert(data.message)
    
        // setting data to local storage 
        localStorage.setItem( 'currentUser' , JSON.stringify( data ))

        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))

        // redirect to the homepage
       if(data.message === "Success") history.push('/')

    } catch (error) {
        console.log(error);
    }
    
}