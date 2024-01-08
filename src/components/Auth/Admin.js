import React from 'react';
import {useDispatch} from 'react-redux';
import AuthForm from './AuthForm'
import { sendAdminAuthRequest } from '../../api-helpers/api-helpers';
import {adminActions} from '../../store'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
const navigate = useNavigate();

  const dispatch = useDispatch();

  const onResRecevied = (data)=>{
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token",data.token);
    navigate("/");
}

const getData =(data)=>{
   console.log("Adminnn:",data);
   sendAdminAuthRequest(data.inputs)
   .then(onResRecevied )
   .catch((err)=> console.log(err))
}
return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  )
}

export default Admin