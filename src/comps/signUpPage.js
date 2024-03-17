import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUpPage() {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();
    const [strengh, setStrengh] = useState("weak");
    const [color, setColor] = useState("gray");


    const onSubForm = (_bodyData) => {
        delete _bodyData.password2;
        doApiPostNewUser(_bodyData);
        console.log(_bodyData);
    }
    const doApiPostNewUser = async (_bodyData) => {
        let myUrl = "http://localhost:3002/users";
        try {
            let resp = await axios({
                method: "POST",
                data: _bodyData,
                url: myUrl
            })
            //check by id the data are added succesfuly
            if (resp.data._id) {
                console.log(resp);
                toast.success("user was created succsfuly");
                nav("/login");
            }
        }
        catch (err) {
            if (err.response.data.code === 11000) {
                toast.warning("Email already exsit!");
                setTimeout(() => {
                    nav("/login")
                }, 5 * 1000)
            }
            console.log(err);
        }
    }

    //check the strong of password and color it and message it 
    const checkStrength = () => {
        if (getValues("password").length < 2) {
            setStrengh("weak");
            setColor("red");
        }
        else if (getValues("password").length < 6) {
            setStrengh("medium");
            setColor("orange");
        }
        else {
            setStrengh("strong");
            setColor("green");
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center'>signUp User</h2>
            <div className='box d-flex align-item-center justify-content-center'>
                <form className='col-md-6 p-2' onSubmit={handleSubmit(onSubForm)} id="id_form">
                    {/* Name */}
                    <label>Name</label>
                    <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
                    {errors.name && <div className="text-danger">* Enter valid name</div>}

                    {/* Email */}
                    <label>Email</label>
                    <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className="form-control" type="email" />
                    {errors.email && <div className="text-danger">* Enter valid email</div>}

                    {/* Phone */}
                    <label>Phone</label>
                    {/* // pattern: /^(\\+972|0)([23489]|[57]\\d)\\-?\\d{7}$/g    /////not working ? */}
                    <input {...register("phone", { required: true, minLength: 2 })} className="form-control" type="text" />
                    {errors.phone && <div className="text-danger">* Enter valid phone</div>}

                    {/* birth year */}
                    <label>Birth Year</label>
                    <input {...register("birth_year", { required: true, minLength: 2 })} className="form-control" type="text" />
                    {errors.birth_year && <div className="text-danger">* Enter valid birth_year</div>}

                    {/* Password */}
                    <label>Password</label>
                    <input onInput={checkStrength}{...register("password", { required: true, minLength: 2 })} className="form-control" type="password" />
                    {errors.password && <div className="text-danger">* Enter valid password</div>}

                    {/* /check the strong of password and color it and message it  */}
                    <h6>Password Strengh:<span style={{ color }}>{strengh}</span> </h6>

                    {/* Repeat Password */}
                    <label>Repeat Password</label>
                    <input {...register("password2", { required: true, validate: (val) => val === getValues("password") })} className="form-control" type="password" />
                    {errors.password2 && <div className="text-danger"> * Passwords Not match!</div>}

                    <button className='btn btn-success'>submit</button>
                </form>
            </div>
        </div>
    )
}
