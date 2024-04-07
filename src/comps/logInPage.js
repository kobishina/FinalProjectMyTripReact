import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/myContext';
import { doApiMethod } from '../services/apiServices';
import { useForm } from 'react-hook-form';
import { API_URL } from '../constant/urls';

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const { updateUser } = useContext(MyContext);
  const nav = useNavigate();

  // const { formState: { errors } } = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // console.error(new Error("wrong"));

      let result = await doApiMethod(API_URL + "/users/login", "POST", { email, password })

      // let statuse = result.response.status;
      // if (statuse === 401) return setErr(result.response.data);
      // if (!result) return setErr("wrong email or password");

      // console.log(result.response.data.msg[0]);

      if (result.token) {
        updateUser(result.user, result.token);
        console.log({ token: result.token });
        // nav("/home");
        nav("/myTrip");
      }
    }
    catch (err) {
      console.log(err);
      setErr("wrong email or password");
    }
  }
  return (

    <div className='container-fluid p-md-5 pt-5 bg_home '>
      <h2 className='text-center h1Fount'>login User</h2>
      <div className='box d-flex align-item-center justify-content-center p-4 m-5'>
        <form className='col-md-6 p-2 ' onSubmit={handleSubmit} >

          {/* email */}

          <label className='m-2' >Email</label>
          <input className="form-control" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />


          {/* password */}
          <label className='m-2' >password</label>
          <input className="form-control " type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

          <button className='btn btn-danger m-2' type="submit">LogIn</button>
          {err && <h3 className='text-danger'>{err}</h3>}

        </form>
      </div>
    </div>



  )
}
