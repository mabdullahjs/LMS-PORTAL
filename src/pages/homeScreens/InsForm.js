import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MAInput from "../../config/components/MAInput";
import MASelect from "../../config/components/MASelect";
import MAButton from "../../config/components/MAButton";

function InsForm() {
    // userType state
    const [user , setUser] = useState("");
    const [type , setType] = useState("");
  return (
    <Box className="container mt-5">
      <Typography className="text-center" variant="h5">
        CREATE INSTITUTES
      </Typography>
      <Box className="mt-3 d-flex justify-content-evenly flex-wrap">
        <MAInput className="m-3" variant="outlined" label="Name" />
        <MAInput className="m-3" variant="outlined" label="No of campus" />
        <MAInput className="m-3" variant="outlined" label="Location" />
        <MAInput className="m-3" variant="outlined" label="Address" />
        <MAInput className="m-3" variant="outlined" label="Contact" />
        <MAInput className="m-3" variant="outlined" label="Owner Contact" />
        <MASelect className="m-3"  value={user} onChange={(e)=>setUser(e.target.value)} option={['institute']} label="user"/>
        <MASelect className="m-3"  value={type} onChange={(e)=>setType(e.target.value)} option={['School' , 'College' , 'University' , 'Institute']} label="Type"/>
      </Box>

      <Box className="d-flex justify-content-center mt-5">
      <MAButton label="create Insitute"/>
      </Box>
    </Box>
  );
}

export default InsForm;
