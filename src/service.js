import axios from 'axios';

axios.interceptors.request.use(
  function (req) {
    console.log("req");
    return req;
  },
  (err) => {
    console.log("req")
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  function (res) {
    console.log("ok")
    return res;
  },
  (err) => {
    console.log(err)
    return Promise.reject(err);
  }
);

const apiUrl = "http://localhost:4000"
// function setUser(user){
//   localStorage.setItem('user',user);
// }
// function initialUser(){
//   localStorage.setItem('user',{});
// }
// function getUser(){
//   return localStorage.getItem('user');
// }
export default {
  initialUser:()=>{
    localStorage.setItem('user','אורח');
  },
  getUser:()=>{
    return localStorage.getItem('user');
  },

  addUser: async(user)=>{
    console.log('addUser',user);
    console.log(localStorage.getItem('user'));
    localStorage.setItem('user',user.userName);
    console.log(localStorage.getItem('user'));
    const result=await axios.post(`${apiUrl}/user/addUser`,user);
    return result.data;
  },

  // setCompleted: async(id,name,isComplete)=>{
  //   console.log('setCompleted', {id,name ,isComplete})
  //   const result=await axios.put(`${apiUrl}/items/${id}`,{name:name,isComplete:true})
  //   return result.data;
  // },

  // deleteTask:async(id)=>{
  //   await axios.delete(`${apiUrl}/items/${id}`)
  //   console.log('deleteTask')
  // }
};
