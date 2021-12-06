import { CSSProperties, useCallback, useContext } from "react";

import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

interface Props {
    className?: string;
    optionColor?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({className, optionColor, style}: Props) => {
    const { counter, increaseBy, maxCount } = useContext(ProductContext); 
    
    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )


    return (
        <div className={styles.buttonsContainer} style={style}>
            <button
                className={`${styles.buttonMinus} ${optionColor}`}
                onClick={() => increaseBy(-1)}
            >
                    -
            </button>
            <div
                className={styles.countLabel}
            >
                {counter}
            </div>
            <button
                className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled} ${className}`}
                onClick={() => increaseBy(1)}
            >
                +
            </button>
        </div>
    )
};