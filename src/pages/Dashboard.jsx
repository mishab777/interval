import React from 'react'
import { Box,Typography } from '@mui/material'
import SideBar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
    <Box sx={{
        display:'flex'
    }}>
        <SideBar/>
    </Box>
      
    </>
  )
}

export default Dashboard
