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

// Operation Assets pages
// import OPERATIONDH from '../pages/Assets/Operation/OPERATION_DH';
import OPERATIONDH from '../pages/Assets/Operation/Operation_DH';
import OperationAuditor from '../pages/Assets/Operation/Operation_Auditor';
import OperationSupervisor from '../pages/Assets/Operation/Operation_Supervisor';
import OperationRecruitementAdmin from '../pages/Assets/Operation/Recruitement_Admin';
import OperationPayrollAdmin from '../pages/Assets/Operation/Payroll_Admin';
import Operation from '../pages/Assets/Operation/Operation';
// End Operation Assets pages

// End Assets pages

import Vacancy from '../pages/Vacancy';
import Login from '../pages/login';
import Signup from '../pages/Signup';

const Pages = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        {/* asset routes */}
        <Route path='/assets/see-all-jobs' element={<SeeAllJobs />} />
        <Route path='/assets' element={<Assets />} />
        {/* HR */}
        <Route path='/assets/HR-human-resources-department-head' element={<HRDH />} />
        <Route path='/assets/HR-payroll-admin' element={<HrPayrollAdmin />} />
        <Route path='/assets/HR-recruitment-admin' element={<HrRecruitementAdmin />} />
        <Route path='/assets/HR-auditor' element={<HrAuditor />} />
        <Route path='/assets/HR-supervisor' element={<HRSupervisor />} />
        <Route path='/assets/HR' element={<HRHumanResource />} />
        {/* End HR */}

         {/* Operation */}
        <Route path='/assets/OPERATION-department-head' element={<OPERATIONDH />} />
        <Route path='/assets/OPERATION-payroll-admin' element={<OperationPayrollAdmin />} />
        <Route path='/assets/OPERATION-auditor' element={<OperationAuditor />} />
        <Route path='/assets/OPERATION-recruitment-admin' element={<OperationRecruitementAdmin />} />
        <Route path='/assets/OPERATION-supervisor' element={<OperationSupervisor />} />
        <Route path='/assets/OPERATION' element={<Operation />} />
        {/* End Operation */}
        
        
        {/* End asset routes */}
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
  );
}

export default Pages