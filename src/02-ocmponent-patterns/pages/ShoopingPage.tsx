import React, { useState } from 'react';

import { ProductButtons, ProductCard, ProudctTitle, ProductImage } from '../components/index';
import { Product } from '../interfaces/product-interfaces';
import '../styles/custom-styles.css'

    const product1 = {
        id: '1',
        title: 'Coffe Mug - Card',
        img: './coffee-mug.png'
    };

    const product2 = {
        id: '2',
        title: 'Coffee Mug - 2',
        img: './coffee-mug2.png'
    };

    const products: Product[] = [product1, product2]

    interface ProductInCart extends Product {
        count: number;
    };

const ShoopingPage = () => {

    const [ shoppingCart, setShoppingCart ] = useState({});

    const onProductCountChange = ({ counter, product }: {counter: number, product: Product}) => {
        
        setShoppingCart( (oldShoppingCart: any) => {

            if(counter === 0){
                const { [product.id]: eliminar, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, counter}
            }

        })

    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{display: 'flex'}}>

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={ product }
                        className="bg-dark text-white"
                        onChange={onProductCountChange}
                    >
                        <ProductImage className="custom-image" />
                        <ProudctTitle className="text-white" style={{fontWeight: 'bold'}} />
                        <ProductButtons 
                            className="custom-buttons" 
                            optionColor="custom-buttons-2"
                            style={{display: 'flex', justifyContent: 'end'}}
                        />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-card">
                <ProductCard
                    product={ product2 }
                    className="bg-dark text-white"
                    style={{width: '100px'}}
                >
                    <ProductImage className="custom-image" />
                    <ProductButtons 
                        className="custom-buttons" 
                        optionColor="custom-buttons-2"
                        style={{display: 'flex', justifyContent: 'end'}}
                    />
                </ProductCard>

                <ProductCard
                    product={ product2 }
                    className="bg-dark text-white"
                    style={{width: '100px'}}
                >
                    <ProductImage className="custom-image" />
                    <ProductButtons 
                        className="custom-buttons" 
                        optionColor="custom-buttons-2"
                        style={{display: 'flex', justifyContent: 'end'}}
                    />
                </ProductCard>
            </div>

            <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>

        </div>
    )
}

export default ShoopingPage;
