import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { KEY_TOKEN } from '../constant/constants'
import Header from '../general_comps/header';

export default function HeaderAdmin() {
    const nav = useNavigate();

    return (

        <header style={{ background: "blue" }} className='container-fluid shadow'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='logo col-auto'>
                        <h2>Admin</h2>
                    </div>
                    <nav className='col row justify-content-between'>
                        <ul className='col-auto'>
                            <li><Link to="/admin/users">Users</Link></li>
                            <li><Link to="/admin/places">Places</Link></li>
                            <li><Link to="/admin/towns">Towens</Link></li>
                            {/* <li><Link to="/admin/trips">Trips</Link></li> */}
                        </ul>
                        <div className='col-auto'>
                            {localStorage[KEY_TOKEN] ?
                                <button className='btn btn-danger' onClick={() => {
                                    localStorage.removeItem(KEY_TOKEN);
                                    nav("/admin");
                                    toast.info("Loged Out success!")
                                }}>LogOut</button> :
                                <Link className='btn btn-info' to="/admin">LogIn</Link>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
