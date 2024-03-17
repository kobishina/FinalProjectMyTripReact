import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../../constant/urls';
import PagesNav from '../../general_comps/pagesNav';
import { doApiGet, doApiMethod, updataUser, updataUserPatch } from '../../services/apiServices';
import AuthAdminComp from '../authAdminComp';
import UserTableRow from './components/userTableRow';

export default function UsersListAdminPage() {
    const [arr, setArr] = useState([]);
    const [query] = useSearchParams();


    useEffect(() => {
        doApi();
    }, [query])

    const doApi = async () => {
        let page = query.get("page") || 1;
        const url = API_URL + "/users/usersList?page=" + page;
        try {
            const data = await doApiGet(url);
            console.log(data);
            setArr(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='container pt-4'>
            <AuthAdminComp />
            <h2 className='text-center'>Table Of Users</h2>
            {/* ToDo pagesNav */}
            <PagesNav apiCount="http://localhost:3002/users/count" linkTo="/admin/users?page=" css=" btn btn-dark me-2 " />

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date_created</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item, i) => {

                        return (
                            <UserTableRow key={item._id} index={i} item={item} setArr={setArr} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
