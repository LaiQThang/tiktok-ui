import classNames from 'classnames/bind';
import React from 'react';

import style from './LoginForOn.module.scss';
import { PopupAppear } from '~/components/Popup';
import Button from '~/components/Buttons';

const cx = classNames.bind(style);

function LoginForOn({ label }) {
    const CustomButton = React.forwardRef(({ open, ...props }, refs) => (
        <Button outline className={cx('login-btn')} ref={refs} {...props}>
            Log in
        </Button>
    ));

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <PopupAppear CustomButton={CustomButton} />
        </div>
    );
}

export default LoginForOn;
