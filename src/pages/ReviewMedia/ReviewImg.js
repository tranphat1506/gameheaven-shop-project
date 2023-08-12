import clsx from 'clsx';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

import FontIcon from '~/components/Common/FontIcon';
import styles from './ReviewMedia.module.scss';
import { useEffect } from 'react';
const ReviewImg = () => {
    const navigate = useNavigate();
    const handleReturn = () => {
        return navigate(-1);
    };
    //const params = useParams();
    const [search, setSearch] = useSearchParams('');
    const blobUrl = search.get('url');
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', ({ key }) => {
            if (key.toLowerCase() === 'escape') return handleReturn();
        });
        return () => {
            document.body.style = '';
            window.removeEventListener('keydown', ({ key }) => {
                if (key.toLowerCase() === 'escape') return handleReturn();
            });
        };
    }, []);
    return (
        <div className={clsx([styles['imgReview']])}>
            <div className={clsx(styles.toolContainer)}>
                <span onClick={handleReturn}>
                    <FontIcon
                        logoName={'close'}
                        fontSize={30}
                        className={clsx(styles.fontIcon, styles.iconClose)}
                    />
                </span>
                <div className={clsx(styles.toolRight)}>
                    <FontIcon
                        logoName={'zoom_in'}
                        fontSize={30}
                        className={clsx(styles.fontIcon, styles['--disable'])}
                    />
                    <FontIcon
                        logoName={'zoom_out'}
                        fontSize={30}
                        className={clsx(styles.fontIcon, styles['--disable'])}
                    />
                </div>
            </div>
            <div className={clsx(styles.imgContainer)}>
                <img src={blobUrl} alt={blobUrl.split('.')[0]}></img>
            </div>
        </div>
    );
};

export default ReviewImg;
