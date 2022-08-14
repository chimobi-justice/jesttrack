import { Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
//lazy load pages that needs to be lazy load in 
const Home =  lazy(() => import('../pages/Home'));
const SeeAllJobs = lazy(() => import('../pages/SeeAllJobs'));
const Assets = lazy(() => import('../pages/Assets'));
const Vacancy = lazy(() => import('../pages/Vacancy'));
const Login =  lazy(() => import('../pages/login'));
const Signup =  lazy(() => import('../pages/Signup'));

const Pages = () => {
  return (
    <Suspense fallback={<div>loading.....</div>} >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/see-all-jobs' element={<SeeAllJobs />} />
        <Route path='/assets' element={<Assets />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </Suspense>
  );
}

export default Pages