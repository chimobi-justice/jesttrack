import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SeeAllJobs from '../pages/SeeAllJobs';
// Assets pages
import Assets from '../pages/Assets';
// HR Assets pages
import HRDH from '../pages/Assets/HR/HRDH';
import HrPayrollAdmin from '../pages/Assets/HR/Payroll_Admin';
import HrRecruitementAdmin from '../pages/Assets/HR/Recruitement_Admin';
import HrAuditor from '../pages/Assets/HR/HR_Auditor';
import HRSupervisor from '../pages/Assets/HR/HR_Supervisor';
import HRHumanResource from '../pages/Assets/HR/Human_resource';
// End HR Assets pages

// End Assets pages

import Vacancy from '../pages/Vacancy';
import Login from '../pages/login';
import Signup from '../pages/Signup';

const Pages = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        {/* asset routes */}
        <Route path='/see-all-jobs' element={<SeeAllJobs />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='/assets/HR-human-resources-department-head' element={<HRDH />} />
        <Route path='/assets/HR-payroll-admin' element={<HrPayrollAdmin />} />
        <Route path='/assets/HR-recruitment-admin' element={<HrRecruitementAdmin />} />
        <Route path='/assets/HR-auditor' element={<HrAuditor />} />
        <Route path='/assets/HR-supervisor' element={<HRSupervisor />} />
        <Route path='/assets/HR' element={<HRHumanResource />} />
        {/* End asset routes */}
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
  );
}

export default Pages