import styles from './Wrapper.module.scss';
import { forwardRef, useEffect, useState, memo, useCallback } from 'react';
const Wrapper = forwardRef(
    (
        { visible = false, children, Component, refProps, event = 'hover' },
        ref,
    ) => {
        if (!Component) throw new Error('Invalid React Element!');
        const wrapperClass = styles.wrapper;
        const [show, setShow] = useState(visible);
        const handleShow = useCallback((status) => {
            return setShow(status);
        }, []);

        useEffect(() => {
            switch (event) {
                case 'click':
                    ref.current.addEventListener('click', (e) => {
                        return handleShow(!show);
                    });
                    break;
                default:
                    ref.current.addEventListener('mouseenter', (e) => {
                        return handleShow(true);
                    });
                    ref.current.addEventListener('mouseleave', (e) => {
                        return handleShow(false);
                    });
            }
        }, [show]);
        return (
            <>
                {children}
                <Component
                    wrapperClass={wrapperClass}
                    {...refProps}
                    state={[show, setShow]}
                />
            </>
        );
    },
);

export default memo(Wrapper);
