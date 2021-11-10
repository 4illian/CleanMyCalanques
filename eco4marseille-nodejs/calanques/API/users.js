
//import instance from "./axiosConfig.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
// const users = {
//     async login({email, password}) {
//         console.log("ddddd");
//          instance.post("/login", {"email" : email, "password" : password}).then((response) => {
            

//             console.log(response);
            
            


//             console.log("token");

//             _storeData = async () => {
//                 try {
//                     await AsyncStorage.setItem(
//                         'token'
//                     );
//                     console.log("dd");
//                 } catch (error) {
//                     console.log(error);
//                     // Error saving data
//                 }
//             };
//         });
//     },

//     async register(data) {
//         await axiosConfig.post("/register", data);
//     },

//     //   async update(data) {
//     //     console.log(data);
//     //     await axiosConfig.put("/user/update", data, {
//     //       headers: {
//     //         "content-type": "multipart/form-data",
//     //       },
//     //     });
//     //   },
// };



const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {

        console.log(value);
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
export default users;