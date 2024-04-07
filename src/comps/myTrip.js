import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams, useHistory, useNavigate } from 'react-router-dom';
import WeatherComponent from '../general_comps/weather';
import TravelList from '../general_comps/travelList';
import SelectCountry from '../general_comps/selectCountry';
import CountryInfoDB from '../general_comps/countryInfoDB';
import AddInfoUser from '../general_comps/addInfoUser';
import { API_URL } from '../constant/urls';
import { doApiGet } from '../services/apiServices';

export default function MyTrip() {
  const nav = useNavigate()
  const [params] = useSearchParams();
  const [countryData, setCountryData] = useState();
  const [borderBtn, setBorderBtn] = useState([]);
  const [dataTown, setDataTown] = useState();

  //collect the name of the country from the url using the params Effectin for my DB
  const getDataTown = async () => {
    try {
      // let url = API_URL + `/towns/editInfo?name=${defaultCountry}`;
      let url = API_URL + `/towns/singleInfo?name=${params.get("name")}`;
      const data = await doApiGet(url);
      console.log("getDataTown: ", data);
      setDataTown(data);
    } catch (err) {
      console.log(err);
    }
  }
  // const history = useHistory();
  // useEffect(() => {
  //   console.log(params);
  // }, [params])


  const Query = params.get("name");

  useEffect(() => {
    setBorderBtn([])
    console.log("params chrnged");
    getCountry();
    getDataTown()
  }, [params])

  //Using Api countrys
  const getCountry = async () => {
    try {
      const { data } = await axios.get(`https://restcountries.com/v3.1/name/${Query}`);
      setCountryData(data[0]);
      console.log("getting country", data);
      // repesent the countrys in ther fullName in share borders
      if (data[0].borders) {
        const { data: bordersData } = await axios.get('https://restcountries.com/v3.1/alpha?codes=' + data[0].borders)
        setBorderBtn(bordersData.map(b => b.name.common))
      }

    } catch (err) {
      console.log(err);
    }
  }

  //when click in the countryBorder will move to that country
  const handleBorderButtonClick = (borderName) => {
    nav("/myTrip?name=" + borderName)
    // Handle what you want to do with the data of the border country, such as displaying it in a modal or navigating to a new page
  }

  // const bordersApi = async (_code) => {
  //   let urlCode = `https://restcountries.com/v3.1/alpha/${_code}`;
  //   try {
  //     let resp = await axios.get(urlCode);
  //     console.log(resp.data);
  //     let full_country_name = resp.data[0].name.common;
  //     // Capitalize the first letter of the country name
  //     full_country_name = full_country_name.charAt(0).toUpperCase() + full_country_name.slice(1);
  //     return full_country_name;
  //   }
  //   catch (err) {
  //     console.log(err);

  //     throw new Error('Failed to fetch country data');
  //   }
  // }

  return (
    <div className='container-fluid m-0' style={{ backgroundColor: "#D2691E", minHeight: "100vh" }}>
      <SelectCountry />
      {countryData && <>
        <div className='mt-3 col-12 col-md-6 mx-auto flex-lg-row flex-column text-sm-center text-lg-start d-flex justify-content-center gap-5'>

          <div className='border border-1 rounded p-3'>
            <h2 className='mt-2'>
              Info About: {countryData.name.common}
            </h2>
            <h4>Country Flag</h4>
            <img className='col-12 ' src={countryData.flags.png} alt='dt' />
            <h3>Population: {countryData.population}</h3>
            <h4>Region: {countryData.region}</h4>
            <h4>Language: {Object.values(countryData.languages) + "  "}</h4>
            <h4>Coin: {Object.keys(countryData.currencies) + " " + Object.values(countryData.currencies)[0].symbol + " (" + Object.values(countryData.currencies)[0].name + ")"}</h4>
            <h4>Capital: {countryData.capital}</h4>
            {/* collect the details from my DB */}
            <div>
              <CountryInfoDB countryName={countryData.name.common} dataTown={dataTown} />
            </div>
            <div>
              {borderBtn.length > 0 ? (
                <div>
                  <h4 className='g-3'>Shared Borders:</h4>
                  <div className='d-flex flex-wrap gap-3 '>
                    {borderBtn.map((border) => (

                      <button className='btn btn-info' key={border} onClick={() => handleBorderButtonClick(border)}>
                        {border}
                      </button>

                    ))}

                  </div>

                </div>
              ) : (
                <p>No shared borders</p>
              )}
            </div>
          </div>

          {/* wheather component using more API and take the name by props move here in the component */}
          <div className='border border-1 rounded p-3'>
            <WeatherComponent defaultCountry={params.get("name")} />
          </div>

        </div>
        <div className='text-center mt-3 '>
          <h4>Maps</h4>
          <iframe
            className='rounded col-lg-6 col-md-8 col-sm-10'
            title="Google Maps"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${countryData.latlng[0]},${countryData.latlng[1]}&z=5&ie=UTF8&iwloc=&output=embed`}
          ></iframe>

          {/* Add Info User to the DB move the data by props  */}
          <AddInfoUser sParams={params} defaultCountry={params.get("name")} dataTown={dataTown} getDataTown={getDataTown} />
        </div>
      </>}

      {/* my list for travel saving LocalStorage */}
      <div className=''>
        <TravelList />
      </div>
    </div >
    //info from the api about the country and connect to DB info about bit chabad
    // place to put some note about the trip will save at local storage
  );
}

// let bordersArr = countryData.border;
// if (bordersArr != null) {
//   bordersArr.map(async item => {
//     setBorderBtn(item);
//     console.log(item);
//   });
// }



//api weather
// https://api.openweathermap.org/data/2.5/weather?q=london&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric
// https://api.openweathermap.org/data/2.5/weather?q=london&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric
// q = london -> ניתן להחליף לעיר אחרת ולקבל עליה מידע

// my data api biet chabad
// note things to arrange for trip save in local storage
//search for country



