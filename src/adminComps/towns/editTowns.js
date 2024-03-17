import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doApiGet, doApiMethod } from '../../services/apiServices';
import { API_URL } from '../../constant/urls';

export default function EditTowns() {

    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [editInfo, setEditInfo] = useState({});
    const params = useParams();

    useEffect(() => {
        doApiEditCategory();
    }, [])

    const doApiEditCategory = async () => {
        try {
            let url = API_URL + `/towns/single/${params["id"]}`;
            const data = await doApiGet(url);
            console.log(data);
            setEditInfo(data);
        } catch (err) {
            console.log(err);
        }
    }

    const onSubForm = (_bodyData) => {
        console.log(_bodyData);
        doApiPut(_bodyData);
    }

    const doApiPut = async (_bodyData) => {
        let myUrl = API_URL + `/towns/${params["id"]}`;
        try {
            const data = await doApiMethod(myUrl, "PUT", _bodyData);
            if (data.modifiedCount) {
                toast.success("towns Updated Succsefuly!")
                nav(-1);
            }
            else {
                toast.warning("you didnt change Anything!");
                nav(-1);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='container pt-4'>
            <h1 className='text-center'>Edit Towns Form</h1>
            <div className='d-flex justify-content-center'>
                {editInfo.country_name ? <form className='col-md-6 p-2' onSubmit={handleSubmit(onSubForm)} id="id_form">

                    <label>Country Name</label>
                    <input defaultValue={editInfo.country_name}{...register("country_name", { required: true, minLength: 2 })} className="form-control" type="text" />
                    {errors.country_name && <div className="text-danger">* Enter valid country_name</div>}<br />

                    <label>town_name</label><br />
                    <input defaultValue={editInfo.town_name}{...register("town_name", { required: true, minLength: 2 })} className="form-control" type="text" />
                    {errors.town_name && <div className="text-danger">* Enter valid town_name</div>}<br />


                    <label>town_info</label>
                    <input defaultValue={editInfo.town_info}{...register("town_info", { required: true, minLength: 2 })} className="form-control" type="text" />
                    {errors.town_info && <div className="text-danger">* Enter valid town_info</div>}<br />



                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success mt-4'>Update Town</button>
                    </div>


                </form> : <h2>Loading...</h2>}
            </div>
        </div>
    )
}
