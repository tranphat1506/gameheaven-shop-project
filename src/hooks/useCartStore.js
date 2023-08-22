import Context from '~/contexts/CartStore/Context';
import { useContext } from 'react';

export const useCartStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
};
