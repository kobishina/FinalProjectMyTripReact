import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../../constant/urls';
import { doApiMethod } from '../../services/apiServices';

export default function AddTowns() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();

    const onSubForm = (_bodyData) => {
        doApiPost(_bodyData);
    }
    const doApiPost = async (_bodyData) => {

        let myUrl = API_URL + "/towns";
        try {
            const data = await doApiMethod(myUrl, "POST", _bodyData);
            console.log(data);

            if (data._id) {
                toast.success("data was updae succesfuly!");
                nav("/admin/towns");
            }
        }
        catch (err) {
            if (err.response.data.code === 11000) {
                toast.dark("towns Already Exist!");
            }
            console.log(err);
        }
    }
    return (
        <div className='container pt-4'>
            <h1 className='text-center'>Add New Town Form</h1>
            <div className='add_form_center d-flex justify-content-center'>
                <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-2' id='id_form'>

                    <label>country_name</label>
                    <input {...register("country_name", { required: true, minLength: 2 })} className='form-control' type="text" />
                    {errors.country_name && <div className='text-danger'>*Enter valid country_name</div>}

                    <label>town_name</label>
                    <input {...register("town_name", { required: true, minLength: 2 })} className='form-control' type="text" />
                    {errors.town_name && <div className='text-danger'>*Enter valid town_name</div>}

                    <label>town_info</label>
                    <input {...register("town_info", { required: true, minLength: 2 })} className='form-control' type="text" />
                    {errors.town_info && <div className='text-danger'>*Enter valid town_info</div>}

                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success mt-2'>Add New Town</button>
                    </div>

                </form>
            </div>

        </div>
    )
}
