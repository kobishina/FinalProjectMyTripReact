import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constant/urls';
import { doApiGet, doApiMethod } from '../../services/apiServices';
import { toast } from 'react-toastify';

export default function AddPlaces() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nav = useNavigate();
    const [townsArr, setTownsArr] = useState([]);



    //casting to get Array for location
    const onSubForm = (_bodyData) => {
        const locationArray = _bodyData.location.split(',').map(location => location.trim());
        const updatedData = { ..._bodyData, location: locationArray };

        doApiPost(updatedData);
    }

    useEffect(() => {
        doApiGetTows();
    }, [])

    const doApiGetTows = async () => {
        let townUrl = API_URL + `/towns/allTowns`;
        const data = await doApiGet(townUrl);
        console.log(data);
        setTownsArr(data);
    }

    const doApiPost = async (_bodyData) => {

        let myUrl = API_URL + "/places";
        try {
            const data = await doApiMethod(myUrl, "POST", _bodyData);
            console.log(data);

            if (data._id) {
                toast.success("data was updae succesfuly!");
                nav("/admin/places");
            }
        }
        catch (err) {
            if (err.response.data.code === 11000) {
                toast.dark("places Already Exist!");
            }
            console.log(err);
        }
    }
    return (
        <div className='container pt-4'>

            <h1 className='text-center'>Add New Place Form</h1>
            <div className='add_form_center d-flex justify-content-center'>
                <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-2' id='id_form'>

                    <label>Name</label>
                    <input {...register("name", { required: true, minLength: 2 })} className='form-control' type="text" />
                    {errors.name && <div className='text-danger'>*Enter valid name</div>}


                    <label>Country_town_name:</label>
                    <select defaultValue="israel" {...register("townId_name", { required: true, minLength: 2 })} className="form-select" type="select">
                        {townsArr.map(item => {
                            return (
                                <option key={item._id} value={item.country_name}>{item.country_name}</option>
                            )
                        })}

                    </select>

                    <label>info</label>
                    <input {...register("info", { required: true, minLength: 2 })} className='form-control' type="text" />
                    {errors.info && <div className='text-danger'>*Enter valid info</div>}

                    <label>img_url</label>
                    <input {...register("img_url", { required: true, minLength: 2 })} className='form-control' type="text" />
                    {errors.img_url && <div className='text-danger'>*Enter valid img_url</div>}

                    <label>location</label>
                    <input {...register("location", { required: true, minLength: 2 })} className='form-control' type="text" />
                    {errors.location && <div className='text-danger'>*Enter valid location</div>}

                    <label className='m-2'>isBetChabad</label>
                    <input {...register("isBetChabad", { required: false, minLength: 2 })} className='form-check-input m-3 ' type="checkbox" />
                    {errors.isBetChabad && <div className='text-danger'>*Enter valid isBetChabad</div>}<br></br>



                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success mt-2'>Add New Place</button>
                    </div>

                </form>
            </div>

        </div>
    )
}
