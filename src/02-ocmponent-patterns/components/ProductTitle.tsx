import { useContext } from "react";

import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProudctTitle = ({title = ''}) => {

    const { product } = useContext(ProductContext);

    return (
        <span className={styles.Description}>
            {title ? title : product.title}
        </span>
    )
};