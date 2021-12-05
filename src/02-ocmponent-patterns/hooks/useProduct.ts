import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/product-interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void
}

export const useProduct = (Props: useProductArgs) => {
    const { product, onChange } = Props;

    const [ counter, setCounter ] = useState<number>(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);

        onChange && onChange({counter: newValue, product});

    };

    return { counter, increaseBy};

}



