import React from 'react';

import { ProductButtons, ProductCard, ProudctTitle, ProductImage } from '../components/index';

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
            <div>    
                <ProductCard product={ product }>
                    <ProductImage />
                    <ProudctTitle />
                    <ProductButtons />
                </ProductCard>
            </div>

        </div>
    )
}

export default ShoopingPage;
