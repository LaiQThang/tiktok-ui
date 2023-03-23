import classNames from 'classnames/bind';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Popup.module.scss';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import PopupItem from './PopupItem';
import { useState } from 'react';

const cx = classNames.bind(style);

function PopupAppear({ CustomButton }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLoginClose = () => setIsOpen(false);
    const handleLoginOpen = () => setIsOpen(true);

    return (
        <Popup
            trigger={(open) => <CustomButton open={open} />}
            on="click"
            open={isOpen}
            onOpen={handleLoginOpen}
            modal
            lockScroll={true}
            closeOnDocumentClick={false}
            overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className={cx('popup')}>
                <div className={cx('wrapper')}>
                    <button onClick={handleLoginClose} className={cx('icon-close')}>
                        <FontAwesomeIcon icon={faMultiply} />
                    </button>
                    <PopupItem />
                </div>
            </div>
        </Popup>
    );
}

export default PopupAppear;
