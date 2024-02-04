"use client";

import {styled, Typography} from '@mui/material';
import React from 'react';

const Container = styled('div')`
    width: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 5px;
    
`

function Header() {
    return (
        <Container>
            <Typography>Test</Typography>
            <Typography>Test 2</Typography>
        </Container>
    );
}

export default Header;