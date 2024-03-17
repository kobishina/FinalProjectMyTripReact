import React, { useEffect, useState } from 'react'
import { API_URL } from '../constant/urls';
import { doApiGet } from '../services/apiServices';

export default function CountryInfoDB({ countryName, dataTown }) {
    const [dataPlaces, setDataPlaces] = useState();
    const [errNotExist, setErrNotExist] = useState({});

    useEffect(() => {
        if (!dataTown) {
            setErrNotExist((prev) => ({ ...prev, towns: "No have info yet " }))
        }
        doApi();
    }, [countryName]);


    const doApi = async () => {
        // const urlTowns = API_URL + "/towns/search/?s=";
        const urlPlaces = API_URL + "/places/search/?s=";

        try {
            // const dataTown = await doApiGet(urlTowns + countryName);
            // dataTown.length ?
            //     setDataTown(dataTown[0])
            //     : setErrNotExist({ towns: "No have info yet " }) || setDataTown(null);


            // for places betChabad
            const dataPlaces = await doApiGet(urlPlaces + countryName);
            dataPlaces.length ?
                setDataPlaces(dataPlaces[0])
                : setErrNotExist((prev) => ({ ...prev, places: "No have info yet " })) || setDataPlaces(null);

        } catch (err) {
            console.log(err);
        }
    }


    // useEffect(() => {
    //     console.log("dataTown: ", dataTown);
    // }, [dataTown])

    // useEffect(() => {
    //     console.log("dataPlaces: ", dataPlaces);
    // }, [dataPlaces])


    return (
        <div className=''>
            <h5>Country Info:{dataTown ? dataTown.town_info : errNotExist.towns}</h5>
            <h4>Have Bet Chabad:{dataPlaces ? dataPlaces.isBetChabad ? "Yes" : "No" : errNotExist.places}</h4>
            {/* {dataPlaces ? <h4> Have Bet Chabad:{dataPlaces.isBetChabad ? "yes" : "no"}</h4>
                : <p className='text-danger'>{errNotExist.places}</p>} */}
        </div>
    )
}
