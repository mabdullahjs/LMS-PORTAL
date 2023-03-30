import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import MAButton from "../../../config/components/MAButton";
import MAModal from "../../../config/components/MAModal";
import { getData } from "../../../config/Firebase/firebaseMethod";
import InsForm from "./InsForm";

function Institute() {
  // modal open or close
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getData("Institute")
      .then((res) => {
        setData(res);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);


  return (
    <Box>
      <Typography variant="h4" className="text-center mb-5 mt-5       ">
        ALL INSTITUTES
      </Typography>

      {/* table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
          {data ? data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.contact}</td>
                <td>{item.type}</td>
              </tr>
            );
          }) : <tr><td>loading...</td></tr>}
        </tbody>
      </Table>
      <MAModal
        open={modal}
        close={() => setModal(false)}
        modalTitle="Create Institute"
        innerContent={<InsForm func={() => setModal(false)} />}
      />
      <Box className="mt-5 d-flex justify-content-center">
        <MAButton onClick={() => setModal(true)} label="Create Institute" />
      </Box>
    </Box>
  );
}

export default Institute;
