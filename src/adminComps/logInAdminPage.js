
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { KEY_TOKEN } from '../constant/constants';
import { API_URL } from '../constant/urls';
import { doApiMethod } from '../services/apiServices';
import { MyContext } from '../context/myContext';

export default function LogInAdminPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { checkIfUserConnect } = useContext(MyContext)
    const nav = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const onSubForm = (_bodyData) => {
        console.log(_bodyData);
        doApiPost(_bodyData);
    }
    const doApiPost = async (_bodyData) => {
        const url = API_URL + "/users/login";//API_URL
        try {
            const data = await doApiMethod(url, "POST", _bodyData);
            if (data.token && data.role === "admin") {


                localStorage.setItem(KEY_TOKEN, data.token);
                await checkIfUserConnect()
                nav("/admin/users");
                toast.success("Loged In Succsess!")
            } else {
                toast.error("you must logedIn As Admin!")
            }
        } catch (err) {
            setErrMsg(err.response.data.msg);
            toast.error(err.response.data.msg);
            console.log(err);
        }
    }
    return (
        <div>
            <div className='container d-flex align-items-center justify-content-center pt-4'>
                <div>
                    <h2>Login page</h2>
                    <form className='mx-auto' onSubmit={handleSubmit(onSubForm)} id="id_form" >
                        <label>email</label>
                        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className="form-control" type="email" />
                        {errors.email && <div className="text-danger">* Enter valid email</div>}
                        <label>password</label>
                        <input {...register("password", { required: true, minLength: 3 })} className="form-control" type="password" />
                        {errors.password && <div className="text-danger">* Enter valid password</div>}
                        <button className='mt-2 btn btn-success'>submit</button>
                        <p>{errMsg}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
