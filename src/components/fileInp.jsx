import { Button, Box } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React, { useState } from 'react'


const InputFile = ({ title, fileHandler, width }) => {
  const [tlt, setTlt] = useState(title);
  return (
    <Button variant="outlined" component="label"

      sx={{ mt: 1, width: width || "70%" }}
    >
      <AttachFileIcon></AttachFileIcon>
      {tlt}
      <input accept="image/* , application/pdf" hidden type="file" onChange={e => {
        fileHandler(e);
        setTlt(e.target.files[0].name)

      }} />
    </Button>


  )
}

export default InputFile;