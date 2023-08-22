import clsx from 'clsx';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';
const Search = () => {
    const navigate = useNavigate();
    const handleReturn = () => {
        return navigate(-1);
    };
    //const params = useParams();
    const [search, setSearch] = useSearchParams('');
    const searchItem = search.get('v');
    return <h1>{searchItem}</h1>;
};

export default Search;
