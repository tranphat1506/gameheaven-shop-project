import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
const Payment = () => {
    const params = useParams();
    const [search, setSearch] = useSearchParams('');
    console.log(search.get('id'));
    return (
        <>
            <li>Payment page</li>
        </>
    );
};

export default Payment;
