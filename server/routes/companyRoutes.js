import express from 'express'
import { ChangeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from "../controllers/companyController.js"

const router = express.Router()

//Register a company
router.post('/register', registerCompany)

// Company Login

router.post('/login', loginCompany)

// Get company data

router.get('/company', getCompanyData)

// Post a job

router.post('/post-job', postJob)

// Get Applicants data of company

router.get('/applicants', getCompanyJobApplicants)

// Get company job list

router.post('/list-jobs', getCompanyPostedJobs)

// Change Applications status

router.post('/change-status', ChangeJobApplicationsStatus)

// Change Applications Visiblity

router.post('/change-visiblity', changeVisiblity)



export default router