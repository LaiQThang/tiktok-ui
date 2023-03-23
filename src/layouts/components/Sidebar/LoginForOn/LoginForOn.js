import classNames from 'classnames/bind';
import React from 'react';

import style from './LoginForOn.module.scss';
import { PopupAppear } from '~/components/Popup';

const cx = classNames.bind(style);

function LoginForOn({ label }) {
    const CustomButton = React.forwardRef(({ open, ...props }, refs) => (
        <button className={cx('login-btn')} ref={refs} {...props}>
            Log in
        </button>
    ));

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <PopupAppear CustomButton={CustomButton} />
        </div>
    );
}

export default LoginForOn;
