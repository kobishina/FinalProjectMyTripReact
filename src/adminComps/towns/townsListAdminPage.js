import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doApiGet, doApiMethod } from '../../services/apiServices';
import { API_URL } from '../../constant/urls';
import AuthAdminComp from '../authAdminComp';
import PagesNav from '../../general_comps/pagesNav';

export default function TownsListAdminPage() {
    const [arr, setArr] = useState([]);
    const [query] = useSearchParams();
    const nav = useNavigate();

    useEffect(() => {
        doApi();
    }, [query]);

    const doApi = async () => {
        let page = query.get("page") || 1;
        const url = API_URL + "/towns/townsList?page=" + page;
        try {
            const data = await doApiGet(url);
            setArr(data);
        } catch (err) {
            console.log(err);
        }
    }
    const doApiDelete = async (_idDel) => {
        let myUrl = API_URL + "/towns/" + _idDel;

        try {
            await doApiMethod(myUrl, "DELETE");
            toast.success("towns delete sucsess");
            setArr(arr => arr.filter(item => item._id != _idDel))
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='container pt-4 table-responsive'>
            <AuthAdminComp />
            <h2 className='text-center'>List Of Towns</h2>

            <div className='d-flex justify-content-center m-4'  >
                <button className='btn btn-warning '><Link style={{ textDecoration: 'none' }} className='link_add' to="/admin/towns/add">Add Towns</Link></button>
            </div>

            <PagesNav apiCount=" http://localhost:3002/towns/count" linkTo="/admin/towns?page=" css=" btn btn-dark me-2 "></PagesNav>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country Name</th>
                        <th>Town Name</th>
                        <th>Town Info</th>
                        <th>date_created</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item, i) => {
                        let page = query.get("page") || 1;

                        return (
                            <tr key={item._id}>
                                <td>{((page - 1) * 5) + i + 1}</td>
                                <td>{item.country_name}</td>
                                <td>{item.town_name}</td>
                                <th>{item.town_info}</th>
                                <td>{item.date_created.substring(0, 10)}</td>

                                <td>
                                    <button className=' ms-2 bg-danger col-9 col-md-2 text-center ' onClick={() => {
                                        window.confirm("are you sure?") &&
                                            doApiDelete(item._id)
                                    }}>X</button>

                                    <button onClick={() => {
                                        nav("/admin/towns/edit/" + item._id);
                                    }} className='bg-info ms-2'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
