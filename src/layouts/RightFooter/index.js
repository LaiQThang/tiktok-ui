import style from './RightFooter.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Button from '~/components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function RightFooter() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollTo = () => {
        // setInterval(() => {
        //     window.scrollTo(0, setScrollPosition(scrollPosition - 10));
        // }, 500);
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
        setScrollPosition(0);
    };

    return (
        <>
            <Button rounded className={cx('get-app')}>
                Get app
            </Button>
            {!scrollPosition || (
                <div className={cx('go-top')}>
                    <Button primary className={cx('arrow')} onClick={handleScrollTo}>
                        <FontAwesomeIcon icon={faArrowsUpToLine} className={cx('icon')} />
                    </Button>
                </div>
            )}
        </>
    );
}

export default RightFooter;
