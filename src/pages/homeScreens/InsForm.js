import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MAInput from '../../config/components/MAInput'

function InsForm() {
    return (
        <Box className=" container">
            <Row>
                <MAInput width="30%" label="name"/>
                <MAInput width="30%" label="name"/>
            </Row>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Box>

    )
}

export default InsForm