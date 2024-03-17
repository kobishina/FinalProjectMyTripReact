import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { KEY_TOKEN } from '../constant/constants';
import { API_URL } from '../constant/urls';
import { doApiGet } from '../services/apiServices';

export default function AuthAdminComp() {
    const nav = useNavigate();
    useEffect(() => {
        doApi();
    }, []) //i Added ,[]
    const doApi = async () => {
        const url = API_URL + "/users/checkToken";
        try {
            const data = await doApiGet(url);
            if (data.role !== "admin") {
                nav("/admin");
                localStorage.removeItem(KEY_TOKEN);
                toast.error("You must be Admin!");
            }
        } catch (err) {
            nav("/admin");
            toast.error("You need log in Again, session Expired!");

            console.log(err);
        }
    }
    return (
        <React.Fragment>

        </React.Fragment>
    )
}
