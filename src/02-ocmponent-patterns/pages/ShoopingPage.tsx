import React from 'react';

import { ProductButtons, ProductCard, ProudctTitle, ProductImage } from '../components/index';
import '../styles/custom-styles.css'

    const product = {
        id: '1',
        title: 'Coffe Mug - Card',
        img: './coffee-mug.png'
    }

const ShoopingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{display: 'flex'}}>    
                <ProductCard 
                    product={ product }
                    style={{background: '#70D1F8'}}
                >
                    <ProductImage />
                    <ProudctTitle style={{fontWeight: 'bold'}} />
                    <ProductButtons className="custom-buttons-2" />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" />
                    <ProudctTitle className="text-white" style={{fontWeight: 'bold'}} />
                    <ProductButtons 
                        className="custom-buttons" 
                        optionColor="custom-buttons-2"
                        style={{display: 'flex', justifyContent: 'end'}}
                    />
                </ProductCard>
            </div>

        </div>
    )
}

export default ShoopingPage;
