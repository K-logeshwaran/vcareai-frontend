import React, { useState } from 'react';
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';
import ValidateOTP from './pages/otp';
import HomeRestrictor from './components/restrictor';
import UserDetailUpload from './pages/updateUser';

import HomeComp from './pages/home';
import AdminPg from './pages/admin/admin';
import AdminAddTask from './pages/admin/adminAddTask';
import AdminEmpView from './pages/admin/adminEmpView';
import AdminLogin from './pages/admin/adminLogin';
import AddEmployee from './pages/admin/addEmployee';
import Tester from './pages/tester';
import Blogs from './pages/blog/main';
import BlogEditor from './pages/admin/blog/create_blog';
import ViewBlog from './pages/admin/blog/view_blogs';
import EditBlog from './pages/admin/blog/admin_edit_blog';
import UserViewBlog from './pages/blog/view_blog';
import AboutUs from './pages/about_us';

import { ThemeProvider } from '@emotion/react';
import { themeOptions } from './helpers/theme';
import SmallBusiness from './pages/services/cfo/small_business';
import OutSourced from './pages/services/cfo/outsourced ';
import InterimCfo from './pages/services/cfo/interim_cfo';
import Fractional from './pages/services/cfo/fractional_cfo';
import ConsultantCfo from './pages/services/cfo/consultant';
import CompanyInformation from './pages/services/compliance_management/company_Information';
import IncomeTaxAdvisory from './pages/services/compliance_management/income_tax_advisory ';
import Legal_regulatory from './pages/services/compliance_management/legal_and_Regulatory';
import PayrollManagement from './pages/services/compliance_management/payroll_management';
import CapitalManagement from './pages/services/finance_accounting/capital_management';
import CashFlow from './pages/services/finance_accounting/cash_flow';
import Mis from './pages/services/finance_accounting/mis';
import TreasuryManagement from './pages/services/finance_accounting/treasury-management';
import BusinessAdv from './pages/services/business_advisory/business';
import RiskTN from './pages/services/riskManagement/risk';
import TemporaryDrawer from './pages/tester2';
import CustomNav from './components/custom-nav/custom-nav';
import Footer from './components/footer';
import VcfoPg from './pages/services/cfo/virtual_cfo';
import AdminNav from './components/admin/nav';
import AdminRestrictor from './components/admin/restrictor';
import Contact from './pages/contact';
import AllServices from './pages/services/all';
import Podcast from './pages/resources/podcast';
import Webiars from './pages/resources/webniar';
import Vids from './pages/resources/videos';
import SignInEmb from './pages/admin/resources/embededUploads';
import ImageUploadPage from './pages/admin/gallery';
import ImageGallery from './pages/imageGallery';
import UsersDisplay from './pages/admin/userCtrl/viewUsers';
import FilesDisplay from './pages/admin/userCtrl/viewUsrFiles';


function App() {


  return (
    <>

      <BrowserRouter>
        <ThemeProvider theme={themeOptions}>
          {window.location.pathname.startsWith("/admin") ? (
            <AdminNav />
          ) : (
            <CustomNav />
          )}


          <Routes>

            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/admin' element={<AdminRestrictor><AdminPg /></AdminRestrictor>} />
            <Route path='/admin/employee/:id' element={<AdminRestrictor> <AdminAddTask /></AdminRestrictor>} />
            <Route path='/admin/employee/jobs/:id' element={
              <AdminRestrictor>
                <AdminEmpView />
              </AdminRestrictor>
            } />
            <Route path='/admin/users' element={
              <AdminRestrictor>
                <UsersDisplay />
              </AdminRestrictor>
            } />
            <Route path='/admin/users/:email' element={
              <AdminRestrictor>
                <FilesDisplay />
              </AdminRestrictor>
            } />
            <Route path='/admin/employee/add' element={
              <AdminRestrictor>
                <AddEmployee />
              </AdminRestrictor>
            } />
            <Route path='/admin/blog/create' element={
              <AdminRestrictor>
                <BlogEditor />
              </AdminRestrictor>
            } />
            <Route path='/admin/blog/edit/:id' element={
              <AdminRestrictor>
                <EditBlog />
              </AdminRestrictor>
            } />
            <Route path='/admin/blog' element={
              <AdminRestrictor>
                <ViewBlog /></AdminRestrictor>} />

            <Route path='/admin/uploadVideo' element={
              <AdminRestrictor>
                <SignInEmb />
              </AdminRestrictor>
            } />
            <Route path='/admin/gallery' element={
              <AdminRestrictor>
                <ImageUploadPage />
              </AdminRestrictor>
            } />



            <Route path='/' element={


              <HomeComp />

            } />
            <Route path='/update' element={<HomeRestrictor><UserDetailUpload /></HomeRestrictor>} />
            <Route path='/register' element={

              <Register />

            } />
            <Route path='/login' element={<Login />} />
            <Route path='/validateOtp' element={<ValidateOTP />} />

            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/gallery' element={<ImageGallery />} />

            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:id' element={<UserViewBlog />} />
            <Route path='/tester' element={<Tester />} />
            <Route path='/tester3' element={<SignInEmb />} />
            <Route path='/tester4' element={<UsersDisplay />} />
            <Route path='/tester2' element={<TemporaryDrawer />} />
            <Route path='/tester7' element={<div>
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/tH2_p_HHbp95IKiHe0DEh"
                title="Chatbot"
                width="50%"
                style={{ height: "100%", minHeight: 700 }}
                frameBorder={0}
              />

            </div>} />
            <Route path="*" element={<h1>404</h1>} />
            {/* <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route> */}

            {/* services pages  */}
            <Route path='/services' element={<AllServices />} />
            {/* services pages cfo */}
            <Route path='/services/cfo/virtualCfo' element={<VcfoPg />} />
            <Route path='/services/cfo/small-business' element={<SmallBusiness />} />
            <Route path='/services/cfo/outsourced' element={<OutSourced />} />
            <Route path='/services/cfo/interim-cfo' element={<InterimCfo />} />
            <Route path='/services/cfo/fractional' element={<Fractional />} />
            <Route path='/services/cfo/consultant' element={<ConsultantCfo />} />

            {/* services pages compliance_management */}
            <Route path='/services/compliance-management/company-information' element={<CompanyInformation />} />
            <Route path='/services/compliance-management/incomeTax-advisory' element={<IncomeTaxAdvisory />} />
            <Route path='/services/compliance-management/legal-regulatory' element={<Legal_regulatory />} />
            <Route path='/services/compliance-management/payroll-management' element={<PayrollManagement />} />

            {/* services pages finance_accounting */}
            <Route path='/services/finance-accounting/capital-management' element={<CapitalManagement />} />
            <Route path='/services/finance-accounting/cash-flow' element={<CashFlow />} />
            <Route path='/services/finance-accounting/mis' element={<Mis />} />
            <Route path='/services/finance-accounting/treasury-management' element={<TreasuryManagement />} />

            {/* services pages business_advisory */}
            <Route path='/services/business-advisory' element={<BusinessAdv />} />

            {/* services pages riskManagement*/}
            <Route path='/services/riskManagement' element={<RiskTN />} />


            <Route path='/resources/podcast' element={<Podcast />} />
            <Route path='/resources/webniars' element={<Webiars />} />
            <Route path='/resources/videos' element={<Vids />} />

            <Route path='/contact_career' element={<Contact />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
