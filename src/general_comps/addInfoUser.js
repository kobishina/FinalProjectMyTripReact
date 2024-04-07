import React, { useEffect, useRef, useState } from 'react'
import { API_URL } from '../constant/urls';
import { doApiGet, doApiMethod } from '../services/apiServices';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function AddInfoUser({ sParams, defaultCountry, dataTown, getDataTown }) {
    console.log("dataTown", dataTown);

    const townInfoInput = useRef(null);
    const townNameInput = useRef(null);
    // const [editInfo, setEditInfo] = useState({});

    useEffect(() => {
        // doApiEditCategory();

    }, [sParams])


    // const doApiEditCategory = async () => {
    //     try {
    //         // let url = API_URL + `/towns/editInfo?name=${defaultCountry}`;
    //         let url = API_URL + `/towns/singleInfo?name=${defaultCountry}`;
    //         console.log(url);
    //         const data = await doApiGet(url);
    //         console.log("data edit: ", data);
    //         setEditInfo(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }



    // const doApiPut = async (_bodyData) => {
    //     let myUrl = API_URL + `/towns/${defaultCountry}`;
    //     try {
    //         const data = await doApiMethod(myUrl, "PUT", _bodyData);
    //         if (data.modifiedCount) {
    //             toast.success("info Updated Succsefuly!")
    //             nav(-1);
    //         }
    //         else {
    //             toast.warning("you didnt change Anything!");
    //             nav(-1);
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const updateInfo = async (e) => {
        e.preventDefault();
        try {
            const body = { country_name: "test", town_name: townNameInput.current.value, town_info: townInfoInput.current.value }
            await doApiMethod(API_URL + `/towns/editInfo?name=${defaultCountry}`, "POST", body);
            getDataTown();
            toast.success("info Updated Succsefuly!")
        }
        catch (err) {
            console.log(err);
        }

    }
    return (

        <div className='container'>
            <h3 className='text-center mt-4'>Edit Info For {defaultCountry}</h3>

            <div className='d-flex justify-content-center '>
                {/* {
                    dataTown && */}

                <form key={dataTown?.town_name} className='col-md-6 p-2  border border-1 rounded' onSubmit={updateInfo} id="id_form">
                    <label>Country Name</label>
                    <input disabled value={defaultCountry} className="form-control" type="text" />
                    <label>town_name</label><br />
                    <input ref={townNameInput} key={dataTown?.town_name} defaultValue={dataTown ? dataTown?.town_name : ""} className="form-control" type="text" />
                    {/* {errors.town_name && <div className="text-danger">* Enter valid town_name</div>}<br /> */}
                    <label>town_info</label>
                    {/* {...register("town_info", { required: true, minLength: 2 })} */}
                    <input ref={townInfoInput} key={dataTown?.town_info} defaultValue={dataTown ? dataTown?.town_info : ""} className="form-control" type="text" />
                    {/* {errors.town_info && <div className="text-danger">* Enter valid town_info</div>}<br /> */}



                    <div className='d-flex justify-content-center'>
                        <button type='submit' className='btn btn-success mt-4'>Update Info</button>
                    </div>
                </form>
                {/* } */}
            </div>
        </div>
    )
}
