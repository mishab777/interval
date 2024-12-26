import { Box, Card, Typography,Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideBar from '../components/Sidebar'
import Grid from '@mui/material/Grid2'
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, deleteProduct, editProduct } from '../product/Productslice';
import Modal from '@mui/material/Modal';





const Product = () => {
    const dispatch = useDispatch();
    const [currentProduct, setCurrentProduct] = useState({ id: '', name: '', price: '' });
    const products = useSelector((state) => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
          const fakeData = [
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 200 },
          ];
          dispatch(setProducts(fakeData));
        };
        fetchProducts();
      }, [dispatch]);

      const handleDelete = (id) => {
        dispatch(deleteProduct(id));
      };
    


      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

      const [open, setOpen] = useState(false);
      const handleOpen = (product) => {
        setCurrentProduct(product); 
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProduct((prev) => ({ ...prev, [name]: value })); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProduct(currentProduct)); 
        setOpen(false); 
    };
    

  return (
    <>
    <Box sx={{
        display:'flex'
    }}>
    <SideBar/>
    <Box sx={{
        width:'100%',
        height:'auto',
        marginTop:'70px',
        padding:'20px'
    }}>
        <Grid container spacing={2}>
        {products.map((product) => (
            <Grid size={{
                xs:12,
                md:4
            }}>
                <Card key={product.id} sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column',
                    borderRadius:'10px',
                    padding:'15px',
                    gap:'5px',
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                }}>
                 <Box component='img' src='https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=' sx={{
                    width:'100%',
                    objectFit:'cover',
                    height:'200px',
                    borderRadius:'10px',
                 }}>

                </Box>   
                <Typography variant='h5' sx={{
                    color:'#23AABF'
                }}>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                ₹{product.price}
                </Typography>
                <Box sx={{
                     display:'flex',
                     alignItems:'center',
                     justifyContent:'space-evenly',
                     flexDirection:'row',
                     gap:'5px'
                }}>
                    <Button onClick={handleOpen} sx={{
                        padding:'5px',
                        borderRadius:'5px',
                        backgroundColor:'blue',
                        color:'white'
                    }}>
                        Edit
                    </Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component='form' onSubmit={handleSubmit} sx={{
            width:'100%',
            display:'flex',
            gap:'10px',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column'
          }}>
            <Typography  variant='h6'>Edit Product</Typography>
            <TextField name="name"
                        value={currentProduct.name}
                        onChange={handleChange} placeholder='Item Name'>
            </TextField>
            <TextField name="price"
                        value={currentProduct.price}
                        onChange={handleChange} placeholder='Item Price'>
            </TextField>
            <Button type='submit' sx={{
                        padding:'5px',
                        borderRadius:'5px',
                        backgroundColor:'green',
                        color:'white',
                        width:'100%'
                    }}>Update</Button>
          </Box>
        </Box>
      </Modal>
                    <Button onClick={() => handleDelete(product.id)} sx={{
                        padding:'5px',
                        borderRadius:'5px',
                        backgroundColor:'red',
                        color:'white'
                    }}>
                        Delete
                    </Button>
                </Box>
                </Card>

            </Grid>
            ))}
        </Grid>

    </Box>
    </Box>
    </>
  )
}

export default Product