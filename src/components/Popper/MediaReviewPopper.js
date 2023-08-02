import clsx from 'clsx';
import styles from './Popper.module.scss';
import FontIcon from '../Common/FontIcon';
import { useEffect } from 'react';

const MediaReviewPopper = ({ wrapperClass, blobUrl, state }) => {
    const [mediaState, setMediaState] = state;
    const handleClose = () => {
        document.body.style = '';
        return setMediaState(!mediaState);
    };
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
    }, []);
    return (
        <>
            {mediaState && (
                <div
                    className={clsx(wrapperClass, {
                        [styles['mediaReview-popper']]: 1,
                    })}
                >
                    <div className={clsx(styles.toolContainer)}>
                        <span onClick={handleClose}>
                            <FontIcon
                                logoName={'close'}
                                fontSize={30}
                                className={clsx(
                                    styles.fontIcon,
                                    styles.iconClose,
                                )}
                            />
                        </span>
                        <div className={clsx(styles.toolRight)}>
                            <FontIcon
                                logoName={'zoom_in'}
                                fontSize={30}
                                className={clsx(
                                    styles.fontIcon,
                                    styles['--disable'],
                                )}
                            />
                            <FontIcon
                                logoName={'zoom_out'}
                                fontSize={30}
                                className={clsx(
                                    styles.fontIcon,
                                    styles['--disable'],
                                )}
                            />
                        </div>
                    </div>
                    <div className={clsx(styles.imgContainer)}>
                        <img src={blobUrl}></img>
                    </div>
                </div>
            )}
        </>
    );
};

export default MediaReviewPopper;
