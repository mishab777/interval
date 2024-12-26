import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

const Currentweather = ({data}) =>{
    return(
        <>
        <Box sx={{
            backgroundImage:{
                xs:'linear-gradient(to bottom, #23AABF,#48BED9)',
                md:'linear-gradient(to right, #23AABF,#48BED9)'
            },
            width:'100%',
            marginTop:'20px',
            marginBottom:'10px',
            borderRadius:'10px',
            padding:'20px',
        }}>
            <Grid container spacing={2}>
                <Grid size={{md:4,xs:12}}>
                <Typography variant="h4" sx={{
                    color:'white',
                }}>{data.city}</Typography>
                <Typography variant="body1" sx={{
                    color:'white',
                }}>{data.weather[0].description}</Typography>
                                <Typography variant="h1" sx={{
                    color:'white',
                    fontWeight:600,
                }}>{Math.round(data.main.temp)}°C</Typography>
                </Grid>
                <Grid size={{md:4,xs:12}}>
                <img src={`icons/${data.weather[0].icon}.png`}></img>
                </Grid>
            <Grid size={{md:4,xs:12}}>

                <Box sx={{
                    height:'100%'
                }}>
                <Box sx={{
                    marginBottom:'10px'
                }}>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>Details</Typography>
                </Box>
                <Box sx={{
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
                }}>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>Feels like</Typography>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>{Math.round(data.main.feels_like)}°C</Typography>
                </Box>
                <Box sx={{
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
                }}>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>Wind</Typography>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>{data.wind.speed}m/s</Typography>
                </Box>
                <Box sx={{
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
                }}>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>Humidity</Typography>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>{data.main.humidity}%</Typography>
                </Box>
                <Box sx={{
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
                }}>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>Pressure</Typography>
                    <Typography variant="h6" sx={{
                        color:'#fff'
                    }}>{data.main.pressure}hPa</Typography>
                </Box>
                </Box>

            </Grid>
            </Grid>
            
        </Box>
        
        
        </>



    )
       


    
}

export default Currentweather;