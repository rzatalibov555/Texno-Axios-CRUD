
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './config';



function App() {

  // const [userId, setUserId] = useState('');


  // const [userData, setUserData] = useState({ username: '', password: '', age: '' });
  // const [updatedUserData, setUpdatedUserData] = useState({ age: '' });


  // const get_allUsers = async () => {
  //   const response = await axios.get(`${BASE_URL}/users`)
  //   console.log(response.data)
  // }

  // const get_single_user = async (user_id) => {
  //   const response = await axios.get(`${BASE_URL}/users/${user_id}`)
  //   console.log(response.data)
  // }

  // const create_user = async (new_user) => {
  //   const response = await axios.post(`${BASE_URL}/users`, new_user)
  //   console.log(response)
  // }

  // const update_data_put = async (user_id, update_user_data) => {
  //   const response = await axios.put(`${BASE_URL}/users/${user_id}`, update_user_data)
  //   console.log(response)
  // }

  // const update_data_patch = async (user_id, update_user_data) => {
  //   const response = await axios.patch(`${BASE_URL}/users/${user_id}`, update_user_data)
  // }

  // const delete_data = async (user_id) => {
  //   await axios.delete(`${BASE_URL}/users/${user_id}`)

  // }

  // useEffect(() => {
  //   // ===================== GET ALL ====================================
  //   // get_allUsers()

  //   // ===================== GET BY ID ==================================
  //   // get_single_user(5)

  //   // ====================== POST INSERT V1 ============================
  //   // const new_user =   {
  //   //   "username": "Zarafshan Ejaz",
  //   //   "password": "001",
  //   //   "age": 211
  //   // }

  //   // create_user(new_user)

  //   // ====================== POST INSERT V2 ============================
  //   // create_user({
  //   //   "username": "Jason",
  //   //   "password": "Statham Bro",
  //   //   "age": 500
  //   // })

  //   // ====================== UPDATE PUT ================================
  //   // const data = {
  //   //     "age": 231
  //   //   }

  //   // update_data_put(22,data)

  //   // ====================== UPDATE PATCH ================================
  //   // const data = {
  //   //   "age": 31
  //   // }

  //   // update_data_patch(29,data)

  //   // ====================== DELETE ================================
  //   // delete_data(20)
  // }, [])


// =======================================================================
  

  const get_user = async (user_id) => {
    const response = await axios.get(`${BASE_URL}/users/${user_id}`)
    return response.data.post_id
  }

  const get_post_id = async(post_id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    return response
  }

  const get_post = async() => {
      const get_user_post_id = await get_user(3)
      
      const post_data = await get_post_id(get_user_post_id)
      console.log(post_data.data)
  }

  useEffect(()=>{
    // get_user(3)
    // get_post_id(92)

    get_post()

  },[])

















  ///////////////////////////////////////////////////////////////////////////////////
  // const handleCreateUser = () => {
  //   create_user(userData);
  // };

  // const handleUpdateUserPut = () => {
  //   update_data_put(userId, updatedUserData);
  // };

  // const handleUpdateUserPatch = () => {
  //   update_data_patch(userId, updatedUserData);
  // };

  // const handleDeleteUser = () => {
  //   delete_data(userId);
  // };

  return (
    <div>
      {/* <h2>Create New User</h2>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={userData.age}
        onChange={(e) => setUserData({ ...userData, age: e.target.value })}
      />
      <button onClick={handleCreateUser}>Create User</button>

      <h2>Update User</h2>
      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="number"
        placeholder="New Age"
        value={updatedUserData.age}
        onChange={(e) => setUpdatedUserData({ age: e.target.value })}
      />
      <button onClick={handleUpdateUserPut}>Update User (PUT)</button>
      <button onClick={handleUpdateUserPatch}>Update User (PATCH)</button>

      <h2>Delete User</h2>
      <button onClick={handleDeleteUser}>Delete User</button>

      <h2>Get Users</h2>
      <button onClick={get_allUsers}>Get All Users</button>
      <button onClick={() => get_single_user(userId)}>Get Single User</button> */}
    </div>
  );
}

export default App;
