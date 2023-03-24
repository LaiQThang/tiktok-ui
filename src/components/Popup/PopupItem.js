import classNames from 'classnames/bind';
import React from 'react';

import style from './Popup.module.scss';
import Button from '~/components/Buttons';
import config from '~/config';
import {
    AppleIcon,
    FaceBookIcon,
    GoogleIcon,
    InsIcon,
    LineIcon,
    QRIcon,
    TwitterIcon,
    UseIcon,
} from '~/components/Icons';

const cx = classNames.bind(style);

function PopupItem() {
    return (
        <>
            <div className={cx('body')}>
                <h2 className={cx('title')}>Log in to TikTok</h2>
                <button className={cx('option')}>
                    <QRIcon className={cx('option-icon')} />
                    User QR code
                </button>
                <button className={cx('option')}>
                    <UseIcon className={cx('option-icon')} />
                    Use phone / email / username
                </button>
                <button className={cx('option')}>
                    <FaceBookIcon className={cx('option-icon')} />
                    Continue with FaceBook
                </button>
                <button className={cx('option')}>
                    <GoogleIcon className={cx('option-icon')} />
                    Continue with Google
                </button>
                <button className={cx('option')}>
                    <TwitterIcon className={cx('option-icon')} />
                    Continue with Twitter
                </button>
                <button className={cx('option')}>
                    <LineIcon className={cx('option-icon')} />
                    Continue with LINE
                </button>
                <button className={cx('option')}>
                    <AppleIcon className={cx('option-icon')} />
                    Continue with Apple
                </button>
                <button className={cx('option')}>
                    <InsIcon className={cx('option-icon')} />
                    Continue with Instagram
                </button>
            </div>

            <div className={cx('footer')}>
                <p>Don't have an account?</p>
                <Button text to={config.routes.signup} className={cx('signup')}>
                    Sign up
                </Button>
            </div>
        </>
    );
}

export default PopupItem;
