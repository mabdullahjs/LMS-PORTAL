import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MAButton from "../../../config/components/MAButton";
import MAModal from "../../../config/components/MAModal";
import { getAllData } from "../../../config/Firebase/firebaseMethod";
import InsForm from "./InsForm";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import MAIconbutton from "../../../config/components/MAIconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MAScreenHeader from "../../../config/components/MAScreenHeader";

function Institute() {
  // modal open or close
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getAllData("Institute")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);


  return (
    <Box>
      {/* <Typography variant="h4" className="text-center mb-5 mt-5">
        ALL INSTITUTES
      </Typography> */}
      <MAScreenHeader screenTitle="Institute List" buttonsList={<MAButton onClick={() => setModal(true)} label="Create Institute" />}/>
      <Box>
      <Paper className="shadow p-4 mb-3 bg-white rounded">
        <Grid container>
          <Grid item md={1.5}>
            <img width="100px" height="100px" src="https://firebasestorage.googleapis.com/v0/b/institute-322.appspot.com/o/images%2F101110601.jpg?alt=media&token=f610c04b-3dc3-4aa0-a7de-1dba9ba4da76" alt="aptech" />
          </Grid>
          <Grid item md={3}>
            <Typography className="mb-2">Name</Typography>
            <Typography variant="h4">Aptech</Typography>
          </Grid>
          <Grid item md={3}>
          <Typography className="mb-2">No of Campuses</Typography>
            <Typography variant="h4">10</Typography>
          </Grid>
          <Grid item md={3}>
          <Typography className="mb-2">Active / Inactive</Typography>
            <Brightness1Icon sx={{fontSize:"2.5rem"}} color="error"/>
          </Grid>
          <Grid item md={1.5}>
            <Box className="mt-3">
            <MAIconbutton icon={<DeleteIcon/>}/>
            <MAIconbutton icon={<EditIcon/>}/>
            </Box>
          </Grid>

        </Grid>
      </Paper>
      </Box>
      
      <MAModal
        open={modal}
        close={() => setModal(false)}
        modalTitle="Create Institute"
        innerContent={<InsForm func={() => setModal(false)} />}
      />
      <Box className="mt-5 d-flex justify-content-center">
        
      </Box>
    </Box>
  );
}

export default Institute;
