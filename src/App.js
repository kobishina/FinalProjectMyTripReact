import { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './appRoutes';
import { ToastContainer } from 'react-toastify';
import { MyContext } from './context/myContext';
import { KEY_TOKEN } from './constant/constants';
import { doApiGet } from './services/apiServices';
// import { Route, Router, Redirect } from 'react-router-dom';



function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (user, token) => {
    setUser(user);
    localStorage[KEY_TOKEN] = token;
  }

  useEffect(() => {
    checkIfUserConnect();
  }, [])

  const checkIfUserConnect = async () => {
    try {
      let token = localStorage[KEY_TOKEN];
      if (!token) return setLoading(false);
      if (token) {
        let resp = await doApiGet("http://localhost:3002/users/userInfo");
        // console.log(token);
        setUser(resp);
        setLoading(false);

      }
    } catch (err) {
      console.log(err);
    }
  }

  return (

    <MyContext.Provider value={{ updateUser, user, setUser }}>
      <div className="App">
        <AppRoutes />
        { /* adding that library and import the css library of tostify*/}
        <ToastContainer position='top-center' theme='colored' />
      </div>
    </MyContext.Provider>
  );
  // <MyContext.Provider value={{ updateUser, user, setUser }}>
  //   <Router>
  //     <div className="App">
  //       <Route exact path="/">
  //         <Redirect to="/home" />
  //       </Route>
  //       <Route path="/home">
  //         <AppRoutes />
  //       </Route>
  //       <ToastContainer position='top-center' theme='colored' />
  //     </div>
  //   </Router>
  // </MyContext.Provider>
  // );

}

{/* <Select onChange={(e) => setCity(e.value)} options={
                    cities.map((city) => (
                        console.log({ value: city, label: city })
                    ))
                }

               

                */}
// if (data.length) {

//   setData(data[0])
// }

// else {
//   setErrNotExist("no have info yet ")
//   setData(null)
// }
export default App;
