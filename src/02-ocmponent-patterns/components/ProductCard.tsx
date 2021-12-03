import React, { createContext, ReactElement, CSSProperties } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/product-interfaces';
export const ProductContext = createContext({} as ProductContextProps);


export interface ProductCardProps {
    product: Product
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
};

export const ProductCard = ({children, product, className, style}: ProductCardProps) => {
    const { increaseBy, counter } = useProduct();

    return (
        <ProductContext.Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </ProductContext.Provider>
    )
};
// ProductCard.Title = ProudctTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
// export default ProductCard;

