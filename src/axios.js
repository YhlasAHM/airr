/* import axios from 'axios'


const token = window.localStorage.getItem('Token');


const config = axios.create({
    baseURL: `http://192.168.1.2:8000/api/`,
    // crossDomain: false ,
    // withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': token ? `Bearer ${token}` : '',
        'Accept-Language': 'en',
        'Content-Type': 'application/ld+json',
        locale: 'en',
        //'Content-Type': 'multipart/form-data',
    },

});

export default config; */
/* 
import axios from 'axios'

const token = JSON.parse(localStorage.getItem('userinfo'))
console.log('tokennnnn', token.access)

const config = axios.create({
   baseURL: `http://127.0.0.1:8000/api/`,
   // crossDomain: false ,
   // withCredentials: false,
   headers: {
      // 'Access-Control-Allow-Origin': '*',
       'Authorization': token ? `Bearer ${token.access}` : '',
       //'Accept-Language': 'en',
       'Content-Type': 'application/ld+json',
   },  
});

export default config;  */
/* 
import axios from 'axios'

const config = axios.create({
    baseURL: `http://127.0.0.1:8000`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("userinfo")
            ? JSON.parse(localStorage.getItem("userinfo")).access
            : null}`
    }
})

export default config */