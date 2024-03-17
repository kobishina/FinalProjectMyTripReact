import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../../../constant/urls';
import { doApiGet, doApiMethod, updataUserPatch } from '../../../services/apiServices';

export default function UserTableData(props) {
    const item = props.item;
    const setArr = props.setArr;
    const delUser = async (_idDel) => {
        const url = API_URL + "/users/" + _idDel;
        try {
            await doApiMethod(url, "DELETE");
            toast.success("user was Deleted!")
            setArr(arr => arr.filter(item => item._id != _idDel))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <td className='d-flex justify-content-center'>
                <button onClick={() => {
                    window.confirm("are you sure?") && delUser(item._id)
                }} className='bg-danger'>X</button>
            </td>

        </>

    )
}
