import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     {id:1, name:'Shoes', description: 'Running shoes.', price: '$5', image:"https://cdn.pixabay.com/photo/2015/05/31/10/54/shoes-791044_960_720.jpg"},
//     {id:2, name:'Macbook', description: 'Apple macbook.', price: '$10', image:"https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041_960_720.jpg"},
// ];

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify= "center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
