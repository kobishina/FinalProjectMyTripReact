import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import HeaderAdmin from './adminComps/headerAdmin';
import LogInAdminPage from './adminComps/logInAdminPage';
import UsersListAdminPage from './adminComps/users/usersListAdminPage';
import HomePage from './comps/homePage'
import MyTrip from './comps/myTrip'
import SignUpPage from './comps/signUpPage'
import Header from './general_comps/header'
import UploadFile from './general_comps/uploadFile';
import LogInPage from './comps/logInPage';
import { MyContext } from './context/myContext';
import PlacesListAdminPage from './adminComps/places/placesListAdminPage';
import EditPlaces from './adminComps/places/editPlaces';
import TownsListAdminPage from './adminComps/towns/townsListAdminPage';
import EditTowns from './adminComps/towns/editTowns';
import AddTowns from './adminComps/towns/addTowns';
import AddPlaces from './adminComps/places/addPlaces';
import IndexComp from './comps/IndexComp';
import About from './comps/about';
import Contact from './comps/contact';
import Footer from './general_comps/footer';
import useAOS from './hooks/useAOS';

export default function AppRoutes() {
  const { user } = useContext(MyContext)

  // affect all page can use Aos anunimate of aos
  useAOS({ duration: 800 })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/*' element={<Header type={"admin"} />} />
        <Route path='/*' element={<Header type={"user"} />} />
      </Routes>
      <div style={{ minHeight: "100vh", marginTop: "-10px", overflow: "hidden", width: "100%" }}>
        <Routes>
          <Route path='/' element={<IndexComp />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/logIn' element={<LogInPage />} /> */}
          <Route path='/signUp' element={<SignUpPage />} />
          {
            user && <Route path='/myTrip' element={<MyTrip />} />
          }

          <Route path='/upload' element={<UploadFile />} />
          <Route path='/admin' element={<LogInAdminPage />} />
          <Route path='/logIn' element={<LogInPage />} />

          {/* admin */}
          <Route path='/admin/users' element={<UsersListAdminPage />} />

          <Route path='/admin/towns' element={<TownsListAdminPage />} />
          <Route path='/admin/towns/edit/:id' element={<EditTowns />} />
          <Route path='/admin/towns/add' element={<AddTowns />} />


          <Route path='/admin/places' element={<PlacesListAdminPage />} />
          <Route path='/admin/places/edit/:id' element={<EditPlaces />} />
          <Route path='/admin/places/add' element={<AddPlaces />} />

          <Route path='*' element={<h2>404 not found</h2>} />

        </Routes>
      </div>


      <Routes>
        <Route path='/*' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}
