import { Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
//lazy load pages that needs to be lazy load in 
const Home =  lazy(() => import('../pages/Home'));
const Login =  lazy(() => import('../pages/login'));

const Pages = () => {
  return (
    <Suspense fallback={<div>loading.....</div>} >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default Pages