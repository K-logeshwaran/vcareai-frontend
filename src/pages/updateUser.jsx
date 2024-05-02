import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { toast, ToastContainer } from "react-toastify";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "react-toastify/dist/ReactToastify.css";
import InputFile from '../components/fileInp';



const requestURL = `${import.meta.env.VITE_BASE_URL}/user`;



const UserDetailUpload = () => {
  function jwtDecode(t) {
    let token = {};
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return (token)
  }
  useEffect(() => {

    console.log(jwtDecode(localStorage.getItem("authToken")))
  }, [])
  const [formData, setFormData] = useState({
    pancardFront: null,
    pancardBack: null,
    aadharcardFront: null,
    aadharcardBack: null,
    mobileNo: '',
    form16: null,
    bankAccountDetails: null,
    bankInterest: null,
    capitalGainStatement: null,
    oldITR: null,
    deductions: {
      savingLic: null,
      deduction80G: null,
      NPS: null,
      educationLoan: null,
      otherDeduction: null
    },
    houseLoan: {
      interestCertificate: null,
      rentedHouseDetails: ''
    },

    bondInterest: null

  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleFileChange = (event, type) => {
    let file = null
    if (type == "houseLoan.rentedHouseDetails" || type == "mobileNo") {
      file = event.target.value;
      console.log(file);
    } else {

      file = event.target.files[0];
    }
    if (type === 'pancardFront' || type === 'pancardBack' || type === 'aadharcardFront' || type === 'aadharcardBack' ||
      type === 'form16' || type === 'bankAccountDetails' || type === 'bankInterest' || type === 'capitalGainStatement' ||
      type === 'oldITR' || type === 'bondInterest' || type == 'mobileNo') {
      setFormData(prevState => ({
        ...prevState,
        [type]: file
      }));
    } else if (type.startsWith('deductions')) {
      const deductionType = type.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        deductions: {
          ...prevState.deductions,
          [deductionType]: file
        }
      }));
    } else if (type.startsWith('houseLoan')) {
      const houseLoanType = type.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        houseLoan: {
          ...prevState.houseLoan,
          [houseLoanType]: file
        }
      }));
    }
  };

  const handleUpload = async () => {
    try {
      setIsLoading(true)
      const formData = new FormData();
      formData.append('pancard', pancard);
      formData.append('aadharcard', aadharcard);
      formData.append('panNumber', panNumber);
      formData.append('aadharNumber', aadharNumber);

      const response = await fetch(requestURL + '/updatePdf', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem("authToken"), // replace with your actual authentication token
        },
        body: formData,
      });

      if (response.ok) {
        setIsLoading(false)
        // File upload successful, handle the success (e.g., show a success message)
        toast.success('PDF files updated successfully');
      } else {
        // File upload failed, handle the error
        setIsLoading(false)
        const data = await response.json();

        toast.error(data.error || 'File upload failed');

      }

    } catch (error) {
      console.error('Error during file upload:', error);
      toast.error('An unexpected error occurred');
      setIsLoading(false)
    }
  };

  async function uploadFiles() {
    setIsLoading(true);
    console.log(formData);

    const FD = new FormData();

    FD.append("pancardFront", formData.pancardFront);
    FD.append("pancardBack", formData.pancardBack);
    FD.append("aadharcardFront", formData.aadharcardFront);
    FD.append("aadharcardBack", formData.aadharcardBack);
    FD.append("form16", formData.form16);
    FD.append("bankAccountDetails", formData.bankAccountDetails);
    FD.append("bankInterest", formData.bankInterest);
    FD.append("capitalGainStatement", formData.capitalGainStatement);
    FD.append("oldITR", formData.oldITR);
    FD.append("deductions[savingLic]", formData.deductions.savingLic);
    FD.append("deductions[deduction80G]", formData.deductions.deduction80G);
    FD.append("deductions[NPS]", formData.deductions.NPS);
    FD.append("deductions[educationLoan]", formData.deductions.educationLoan);
    FD.append("deductions[otherDeduction]", formData.deductions.otherDeduction);
    FD.append("houseLoan[interestCertificate]", formData.houseLoan.interestCertificate);
    FD.append("bondInterest", formData.bondInterest);
    FD.append("rentedHouseDetails", formData.houseLoan.rentedHouseDetails);
    FD.append("mobileNo", formData.mobileNo);


    try {
      const { payload } = jwtDecode(localStorage.getItem("authToken"))
      const response = await fetch('http://localhost:3134/user/upload/' + payload.email, {
        method: 'POST',
        body: FD
      });

      let d = await response.text()
      console.log(d);
      setIsLoading(false)
      toast.success("Uploaded")

    } catch (error) {
      setIsLoading(false)
      toast.error("failed")
      console.error('Error:', error);

    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        width: "95%",
        margin: "auto",
        justifyContent: "center",
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Grid rowGap={7} container padding={"2rem 0"}>
        {/* <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography component={'h5'} variant='h5'>Aadhar card</Typography>
        </Grid> */}
        {/* <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Front"} fileHandler={(event) => handleFileChange(event, 'aadharcardFront')} />
        </Grid> */}
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Aadhar"} fileHandler={(event) => handleFileChange(event, 'aadharcardBack')} />
        </Grid>
        {/* <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography component={'h5'} variant='h5'>Pan card</Typography>

        </Grid> */}
        {/* <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Front"} fileHandler={e => handleFileChange(e, "pancardFront")} />
        </Grid> */}
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Pancard"} fileHandler={e => handleFileChange(e, "pancardBack")} />
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* <Typography component={'h5'} variant='h5'>Mob no</Typography> */}
          <TextField id="mobile-no" name='mobile-no' label="Mobile Number " variant="outlined" sx={{ width: "70%" }}
            onChange={e => handleFileChange(e, "mobileNo")}
          />
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Form 16"} fileHandler={e => handleFileChange(e, "form16")} />
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Bank account details "} fileHandler={e => handleFileChange(e, "bankAccountDetails")} />

        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Bank interest"} fileHandler={e => handleFileChange(e, "bankInterest")} />

        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"Capital gain statement "} fileHandler={e => handleFileChange(e, "capitalGainStatement")} />

        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"OLD filling ITR"} fileHandler={e => handleFileChange(e, "oldITR")} />

        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography component={'h5'} variant='h4'>Deductions</Typography>
        </Grid>
        <Grid item xs={2.4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile name title={"savingLic"} fileHandler={e => handleFileChange(e, "deductions.savingLic")} />

        </Grid>
        <Grid item xs={2.4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"deduction80G"} fileHandler={e => handleFileChange(e, "deductions.deduction80G")} />
        </Grid>
        <Grid item xs={2.4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"NPS"} fileHandler={e => handleFileChange(e, "deductions.NPS")} />
        </Grid>
        <Grid item xs={2.4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"educationLoan"} fileHandler={e => handleFileChange(e, "deductions.educationLoan")} />
        </Grid>
        <Grid item xs={2.4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"otherDeduction"} fileHandler={e => handleFileChange(e, "deductions.otherDeduction")} />
        </Grid>

        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography component={'h5'} variant='h5'>House Loan</Typography>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile title={"interestCertificate"} fileHandler={e => handleFileChange(e, "houseLoan.interestCertificate")} />
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <TextField
            id="outlined-textarea"
            label="Rented House Details"
            placeholder="Rented House Details"
            multiline
            name='rentedHouseDetails'
            sx={{ width: "70%" }}
            onChange={e => handleFileChange(e, "houseLoan.rentedHouseDetails")}

          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InputFile fileHandler={e => handleFileChange(e, "bondInterest")} title={"OLD filling ITR 2"} />
        </Grid>
        <Grid item><Button disabled={isLoading} variant='contained' onClick={() => {
          console.log(formData);
          console.log(JSON.stringify(formData));
          uploadFiles()

        }}>
          {
            isLoading === true ? <span className="loader"></span> : "Upload"
          }
        </Button></Grid>
      </Grid>
      <ToastContainer />
    </Box>

  );
};

export default UserDetailUpload;

function EEE() {
  return (<Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >

    <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
      Upload Files
    </Typography>
    <Box component="form" style={{ width: "60%" }} noValidate sx={{ mt: 1 }} onSubmit={(eve) => {
      eve.preventDefault();
      handleUpload()
    }}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6}>
          <TextField
            name="aadhar-no"
            required
            fullWidth
            id="aadhar-no"
            label="Aadhar Number"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" component="label" fullWidth
            sx={{ mt: 1 }}
          >
            attach aadharcard
            <input accept="image/* , application/pdf" hidden type="file" />
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="pan-no"
            required
            fullWidth
            id="pan-no"
            label="Pan Number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" component="label" fullWidth
            sx={{ mt: 1 }}
          >
            attach pan card
            <input accept="image/* , application/pdf" hidden type="file" />
          </Button>
        </Grid>
      </Grid>

      {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}

      <Button
        type="submit"
        fullWidth
        variant="contained"

        sx={{ mt: 3, mb: 2 }}
      >

        {
          isLoading === true ? <span class="loader"></span> : "Upload Files"
        }
      </Button>

    </Box>
  </Box>);
}