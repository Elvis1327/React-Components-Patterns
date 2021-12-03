import React, { createContext } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/product-interfaces';
export const ProductContext = createContext({} as ProductContextProps);

export const ProductCard = ({children, product}: ProductCardProps) => {
    const { increaseBy, counter } = useProduct();

    return (
        <ProductContext.Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </ProductContext.Provider>
    )
};
// ProductCard.Title = ProudctTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
// export default ProductCard;

