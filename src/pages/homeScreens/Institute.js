import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MAButton from '../../config/components/MAButton'
import MAModal from '../../config/components/MAModal'
import BasicTable from '../../config/components/muiCom/Table'
import { getData } from '../../config/Firebase/firebaseMethod'
import InsForm from './InsForm'

function Institute() {

    // modal open or close
    const [data, setData] = useState();
    const [modal, setModal] = React.useState(false)

    useEffect(() => {
        getData("Institute")
            .then( (res) => {
                 setData(res)
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [modal])



    return (
        <Box>
            <Typography variant='h4' className="text-center mb-5 mt-5       ">
                ALL INSTITUTES
            </Typography>
            <BasicTable />
            <MAModal open={modal} close={() => setModal(false)} modalTitle="Create Institute" innerContent={<InsForm func={() => setModal(false)} />} />
            <Box className="mt-5 d-flex justify-content-center">
                <MAButton onClick={() => setModal(true)} label="Create Institute" />
            </Box>
        </Box>
    )
}

export default Institute