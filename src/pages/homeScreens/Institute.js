import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MAButton from '../../config/components/MAButton'
import MAModal from '../../config/components/MAModal'
import BasicTable from '../../config/components/muiCom/Table'
import InsForm from './InsForm'

function Institute() {
    // modal open or close
    const [modal, setModal] = React.useState(false)
    return (
        <Box>
            <Typography variant='h5'>
                Institutes
            </Typography>
            <BasicTable />
            <MAModal open={modal} close={() => setModal(false)} modalTitle="Create Institute" innerContent={<InsForm func={() => setModal(false)} />} />
            <MAButton onClick={() => setModal(true)} label="Create Institute" />
        </Box>
    )
}

export default Institute