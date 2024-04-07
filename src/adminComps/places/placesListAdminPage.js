import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from '../../constant/urls';
import { doApiGet, doApiMethod } from '../../services/apiServices';
import AuthAdminComp from '../authAdminComp';
import { toast } from 'react-toastify';
import PagesNav from '../../general_comps/pagesNav';

export default function PlacesListAdminPage() {
    const [arr, setArr] = useState([]);
    const [query] = useSearchParams();
    const nav = useNavigate();

    useEffect(() => {
        doApi();
    }, [query]);

    const doApi = async () => {
        let page = query.get("page") || 1;
        const url = API_URL + "/places/placesList?page=" + page;

        try {
            const data = await doApiGet(url);
            console.log(data);
            setArr(data);
        } catch (err) {
            console.log(err);
        }
    }
    const doApiDelete = async (_idDel) => {
        let myUrl = API_URL + "/places/" + _idDel;

        try {
            await doApiMethod(myUrl, "DELETE");
            toast.success("place delete sucsess");
            setArr(arr => arr.filter(item => item._id != _idDel))
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='container pt-4  table-responsive'>
            <AuthAdminComp />
            <h2 className='text-center'>List Of Places</h2>
            <div className='d-flex justify-content-center m-4'  >
                <button className='btn btn-warning '><Link style={{ textDecoration: 'none' }} className='link_add' to="/admin/places/add">Add Places</Link></button>
            </div>
            <PagesNav apiCount=" http://localhost:3002/places/count" linkTo="/admin/places?page=" css=" btn btn-dark me-2 "></PagesNav>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Town Id Name</th>
                        <th>Name</th>
                        <th>Info</th>
                        <th>Img</th>
                        <th>location</th>
                        <th>Have Chabad</th>
                        <th>date_created</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item, i) => {
                        let page = query.get("page") || 1;

                        return (
                            <tr key={item._id}>
                                <td>{((page - 1) * 5) + i + 1}</td>
                                <td>{item.townId_name}</td>
                                <td>{item.name}</td>
                                <td>{item.info}{item.info.substring(0, 20)}...</td>
                                <td>{item.img_url}</td>

                                {/*  ליתר דיוק זה מערך למה לא מציג עם פסיק */}
                                <td>{item.location}</td>

                                {/* .toString() */}
                                <td>{item.isBetChabad ? "Yes" : "No"}</td>
                                <td>{item.date_created.substring(0, 10)}</td>

                                <td>
                                    <button className='bg-danger ms-2 col-10 col-md-3' onClick={() => {
                                        window.confirm("are you sure?") &&
                                            doApiDelete(item._id)
                                    }}>X</button>

                                    <button onClick={() => {
                                        nav("/admin/places/edit/" + item._id);
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
