import { Box } from "@mui/system";
import React, { useState } from "react";
import MAButton from "../../../config/components/MAButton";
import MAInput from "../../../config/components/MAInput";
import MASelect from "../../../config/components/MASelect";
import { sendData , auth } from "../../../config/Firebase/firebaseMethod";

function InsForm(props) {
  const { func } = props;
  // userType state
  const [user, setUser] = useState("");
  const [type, setType] = useState("");
  const [campus, setCampus] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [ownercontact, setOwnercontact] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);

  //create user Function
  const createInstitute = () => {
    setLoader(true)
    sendData({
      name: name,
      user: user,
      type: type,
      campus: campus,
      location: location,
      address: address,
      contact: contact,
      ownerContact: ownercontact,
      id: auth.currentUser.uid
    }, "Institute")
      .then((res) => {
        console.log(res);
        setLoader(false)
        func()
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      })
  }
  return (
    <Box className="container mt-5">
      <Box className="mt-3 d-flex justify-content-evenly flex-wrap">
        <MAInput value={name} onChange={(e) => setName(e.target.value)} className="m-3" variant="outlined" label="Name" />
        <MAInput required={true} value={campus} onChange={(e) => setCampus(e.target.value)} className="m-3" variant="outlined" label="No of campus" />
        <MAInput value={location} onChange={(e) => setLocation(e.target.value)} className="m-3" variant="outlined" label="Location" />
        <MAInput value={address} onChange={(e) => setAddress(e.target.value)} className="m-3" variant="outlined" label="Address" />
        <MAInput value={contact} onChange={(e) => setContact(e.target.value)} className="m-3" variant="outlined" label="Contact" />
        <MAInput value={ownercontact} onChange={(e) => setOwnercontact(e.target.value)} className="m-3" variant="outlined" label="Owner Contact" />
        <MASelect className="m-3" value={user} onChange={(e) => setUser(e.target.value)} option={['institute']} label="user" />
        <MASelect className="m-3" value={type} onChange={(e) => setType(e.target.value)} option={['School', 'College', 'University', 'Institute']} label="Type" />
      </Box>

      <Box className="d-flex justify-content-center mt-5">
        <MAButton loading={loader} onClick={createInstitute} label="create Insitute" />
      </Box>
    </Box>
  );
}

export default InsForm;
