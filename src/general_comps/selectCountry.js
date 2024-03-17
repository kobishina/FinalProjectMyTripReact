import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from "react-select";

export default function SelectCountry() {
    const [options, setOptions] = useState([])
    const [loading, setLoadinbg] = useState(true)
    const [country, setCountry] = useState("")
    const nav = useNavigate()
    // useAOS({ duration: 800 })
    useEffect(() => {
        getOptions()
    }, [])
    const getOptions = async () => {
        try {
            const { data } = await axios.get("https://restcountries.com/v3.1/all");
            createSelectOptionFormat(data)
            setLoadinbg(false)
        }
        catch (error) {
            setLoadinbg(false)
            alert(error)
        }
    }
    const createSelectOptionFormat = (data) => {
        const optionsArray = []
        for (let country of data) {
            optionsArray.push({ label: country.name.common, value: country.name.common })
        }
        setOptions(optionsArray)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        nav("/myTrip?name=" + country)

    }
    return (

        // {/* choose */}
        <div className='pt-4 ' data-aos="fade-down">

            <form onSubmit={onSubmit} className='box_select h-50px col-md-6  mx-auto mt-0 p-2 border border-1 rounded    col-12 mx-abox_selectuto '>
                <h3 className='text-danger text-center'>Choose Yor destination:</h3>
                <Select onChange={(e) => setCountry(e.value)} options={options} />
                <div className='text-center m-3'>
                    <button className='btn btn-primary  box-pill'>search</button>
                </div>
            </form>
        </div>


    )
}
