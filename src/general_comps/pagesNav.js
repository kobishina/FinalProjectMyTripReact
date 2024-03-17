import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

export default function PagesNav(props) {
    const [pages, setPages] = useState(0);
    const [query] = useSearchParams();
    let currentPage = Number(query.get("page") || 1);

    useEffect(() => {
        doApiGetPages();
    }, [])

    const doApiGetPages = async () => {
        let url = props.apiCount;
        let resp = await axios.get(url);
        console.log(resp.data);
        setPages(resp.data.pages);

    }
    return (
        <div className='my-2 text-center'>
            <Link className={props.css} to={props.linkTo + Math.max(currentPage - 1, 1)}>{"<<<"}Back</Link>
            {[...Array(pages)].map((item, i) => {
                return (
                    <Link key={i} className={props.css + ((i + 1) === currentPage ? "bg-info" : "")} to={props.linkTo + (i + 1)}>{i + 1}</Link>
                )
            })}
            <Link className={props.css} to={props.linkTo + Math.min(currentPage + 1, pages)}>{">>>"}Next</Link>
        </div>
    )
}
