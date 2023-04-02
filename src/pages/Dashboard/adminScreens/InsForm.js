import { Box } from "@mui/system";
import React, { useState } from "react";
import MAButton from "../../../config/components/MAButton";
import MAInput from "../../../config/components/MAInput";
import MASelect from "../../../config/components/MASelect";
import { sendData, auth, signUpUser } from "../../../config/Firebase/firebaseMethod";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../../../config/Firebase/firebaseconfig";


function InsForm(props) {
  const { func } = props;

  //firebase storage setup
  const storage = getStorage(app);

  // userType state
  const [image, setImage] = useState(null);
  const [val, setVal] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [type, setType] = useState("");
  const [campus, setCampus] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [ownercontact, setOwnercontact] = useState("");
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");
  const [loader, setLoader] = useState(false);


  const createInstitute = () => {
    setLoader(true)
    const obj = {
      name: name,
      shortName: sname,
      email: email,
      password: password,
      user: user,
      type: type,
      campus: campus,
      location: location,
      address: address,
      contact: contact,
      ownerContact: ownercontact,
      id: auth.currentUser.uid
    }
    const signObj = {
      email: email,
      password: password,
      user: user
    }
    signUpUser(signObj)
      .then(async (res) => {
        let file = image
        let imageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imageRef, file);
        let url = await getDownloadURL(imageRef);
        let saveUrl = JSON.stringify(url);
        obj.img = saveUrl
        sendData(obj , "Institute")
        .then((res)=>{
          // console.log(res);
          setLoader(false)
          func()
        })
      })
      .catch(() => {
        setLoader(false)
      })
  }
  // set image function
  const setImageFile = (e) => {
    // setImage(e.target.files[0])
    // setFileName(e.target.files[0].name);
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    setVal(e.target.value);
  }
  return (
    <Box className="container mt-5">
      <Box className="mt-3 d-flex justify-content-evenly flex-wrap">
        <MAInput value={name} onChange={(e) => setName(e.target.value)} className="m-3" variant="outlined" label="Name" />
        <MAInput value={sname} onChange={(e) => setSname(e.target.value)} className="m-3" variant="outlined" label="Short Name" />
        <MAInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="m-3" variant="outlined" label="Email" />
        <MAInput value={password} type="password" onChange={(e) => setPassword(e.target.value)} className="m-3" variant="outlined" label="Password" />
        <MAInput value={campus} onChange={(e) => setCampus(e.target.value)} className="m-3" variant="outlined" label="No of campus" />
        <MAInput value={location} onChange={(e) => setLocation(e.target.value)} className="m-3" variant="outlined" label="Location" />
        <MAInput value={address} onChange={(e) => setAddress(e.target.value)} className="m-3" variant="outlined" label="Address" />
        <MAInput value={contact} onChange={(e) => setContact(e.target.value)} className="m-3" variant="outlined" label="Contact" />
        <MAInput value={ownercontact} onChange={(e) => setOwnercontact(e.target.value)} className="m-3" variant="outlined" label="Owner Contact" />
        <MASelect className="m-3" value={user} onChange={(e) => setUser(e.target.value)} option={['institute']} label="user" />
        <MASelect className="m-3" value={type} onChange={(e) => setType(e.target.value)} option={['School', 'College', 'University', 'Institute']} label="Type" />
        <MAInput value={val} onChange={setImageFile} className="m-3" type="file" width="35%" label="Profile Image" />
      </Box>

      <Box className="d-flex justify-content-center mt-5">
        <MAButton loading={loader} onClick={createInstitute} label="create Insitute" />
      </Box>
    </Box>
  );
}

export default InsForm;
