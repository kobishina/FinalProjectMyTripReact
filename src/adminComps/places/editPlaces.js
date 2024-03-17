import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../constant/urls';
import { doApiGet, doApiMethod } from '../../services/apiServices';
import { toast } from 'react-toastify';

export default function EditPlaces() {
    // rfc

    const nav = useNavigate();
    const [editInfo, setEditInfo] = useState({});
    const [townsArr, setTownsArr] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const params = useParams();

    useEffect(() => {
        doApiEditPlacestAndGetTows();
    }, [])

    const doApiEditPlacestAndGetTows = async () => {
        try {
            let townUrl = API_URL + `/towns/allTowns`;
            const data = await doApiGet(townUrl);
            console.log(data);
            setTownsArr(data);


            let urlInfo = API_URL + `/places/single/${params["id"]}`;
            const dataPlaces = await doApiGet(urlInfo);
            console.log(dataPlaces);
            setEditInfo(dataPlaces)
        } catch (err) {
            console.log(err);
        }
    }
    const onSubForm = (_bodyData) => {
        console.log(_bodyData);
        //casting location to Array
        const locationArray = _bodyData.location.split(',').map(location => location.trim());
        const updatedData = { ..._bodyData, location: locationArray };

        doApiPut(updatedData);
    }
    const doApiPut = async (_bodyData) => {
        let myUrl = API_URL + `/places/${params["id"]}`;
        try {
            const data = await doApiMethod(myUrl, "PUT", _bodyData);
            if (data.modifiedCount) {
                toast.success("places Updated Succsefuly!")
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
            <h1 className='text-center'>Edit Places Form</h1>
            <div className='d-flex justify-content-center'>
                {townsArr.length > 0 && editInfo.name ?
                    <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-2'>

                        <label>Name:</label>
                        <input defaultValue={editInfo.name}{...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
                        {errors.name && <div className='text-danger'>*Enter valid Name</div>}

                        {/* <label>townId_name:</label>
                        <input defaultValue={editInfo.townId_name}{...register("townId_name", { required: true, minLength: 2 })} className="form-control" type="text" />
                        {errors.townId_name && <div className='text-danger'>*Enter valid townId_name</div>} */}


                        <label>info:</label>
                        <input defaultValue={editInfo.info}{...register("info", { required: true, minLength: 1 })} className="form-control" type="text" />
                        {errors.info && <div className='text-danger'>*Enter valid info</div>}

                        <label>location:</label>
                        <input defaultValue={editInfo.location ? editInfo.location.join(',') : ''}{...register("location", { required: true, minLength: 2 })} className="form-control" type="text" />
                        {errors.location && <div className='text-danger'>*Enter valid location</div>}

                        <label className='m-2'>isBetChabad:</label>
                        <input defaultChecked={editInfo.isBetChabad}{...register("isBetChabad", { required: false, minLength: 1 })} className='form-check-input m-3 ' type="checkbox" />
                        {errors.isBetChabad && <div className='text-danger'>*Enter valid isBetChabad</div>}<br></br>

                        <label>Country_town_name:</label>
                        <select defaultValue={editInfo.townId_name} {...register("townId_name", { required: true, minLength: 2 })} className="form-select" type="select">
                            {townsArr.map(item => {
                                return (
                                    <option key={item._id} value={item.country_name}>{item.country_name}</option>
                                )
                            })}

                        </select>
                        <button className='btn btn-success mt-4'>Update Places</button>
                    </form>
                    : <h2>Loading....</h2>}
            </div>
        </div>
    )
}
