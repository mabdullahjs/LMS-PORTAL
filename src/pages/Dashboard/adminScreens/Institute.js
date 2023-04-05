import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MAButton from "../../../config/components/MAButton";
import MAModal from "../../../config/components/MAModal";
import { deleteDocument, getAllData, updateDocument } from "../../../config/Firebase/firebaseMethod";
import InsForm from "./InsForm";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import MAIconbutton from "../../../config/components/MAIconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MAScreenHeader from "../../../config/components/MAScreenHeader";
import { useNavigate } from "react-router-dom";


function Institute() {
  // modal open or close
  const [data, setData] = useState(null);
  const [uid, setUid] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    getAllData("Institute")
      .then((res) => {
        setData(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);


  //useNavigate hook

  const navigate = useNavigate()

  // Delete Institute function

  const deleteInsitute = async (id) => {
    await deleteDocument(id, "Institute")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      setDeleteModal(false)
  }

  //update institute function
  const updateInstitute = async(id , e)=>{
    e.stopPropagation()
    const obj = {
      shortName:"usman"
    }
    await updateDocument(obj , id , "Institute")
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  // Open delete modal function

  const openModal = (id , e) => {
    e.stopPropagation()
    setUid(id)
    setDeleteModal(true)
  }

  //send detail to another page

  const sendDetail = (item)=>{
    navigate('/admin/detail' , {
      state:item
    })
  }

  return (
    <Box>
      <MAScreenHeader screenTitle="Institute List" buttonsList={<MAButton onClick={() => setModal(true)} label="Create Institute" />} />
      {data ? data.map((item, index) => {
        return <Box key={index} onClick={()=>sendDetail(item)}>
          <Paper className="shadow p-4 mb-3 bg-white rounded">
            <Grid container>
              <Grid item md={2} sm={6}>
                <img width="100px" height="100px" src={item.img.replace(/"/g, "")} alt={item.shortName} />
              </Grid>
              <Grid item md={3} sm={6}>
                <Typography className="mb-2">Name</Typography>
                <Typography variant="h5">{item.shortName}</Typography>
              </Grid>
              <Grid item md={3} sm={6}>
                <Typography className="mb-2">No of Campuses</Typography>
                <Typography variant="h5">{item.campus}</Typography>
              </Grid>
              <Grid item md={3} sm={6}>
                <Typography className="mb-2">Active / Inactive</Typography>
                <Brightness1Icon sx={{ fontSize: "2.5rem" }} color="error" />
              </Grid>
              <Grid item md={1} sm={6}>
                <Box className="mt-3">
                  <MAIconbutton onClick={(e) => openModal(item.documentId , e)} icon={<DeleteIcon />} />
                  <MAIconbutton onClick={(e)=> updateInstitute(item.documentId , e)} icon={<EditIcon />} />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      }) : <Typography variant="h5">Loading...</Typography>}


      <MAModal
        open={modal}
        close={() => setModal(false)}
        modalTitle="Create Institute"
        innerContent={<InsForm func={() => setModal(false)} />}
      />
      <MAModal
      width="400px"
        open={deleteModal}
        close={() => setDeleteModal(false)}
        modalTitle="Delete Institute"
        innerContent={<Box>
          <Typography>Are you sure you want to delete Institute?</Typography>
          <MAButton onClick={()=>deleteInsitute(uid)} className="m-2" color="error" label="Yes"/>
          <MAButton onClick={() => setDeleteModal(false)}  label="No"/>
        </Box>}
      />
      <Box className="mt-5 d-flex justify-content-center">
      </Box>
    </Box>
  );
}

export default Institute;
