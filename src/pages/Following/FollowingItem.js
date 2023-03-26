import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Buttons';

import style from './Following.module.scss';
import { PopupAppear } from '~/components/Popup';

const cx = classNames.bind(style);

function FollowingItem({ data = {} }) {
    const BtnFollowing = forwardRef(({ open, ...props }, refs) => (
        <Button primary className={cx('topic-following')} ref={refs} {...props}>
            Follow
        </Button>
    ));

    return (
        <div className={cx('topic')}>
            <img className={cx('banner')} src={data.thumb_url} alt={data.description} />
            <div className={cx('infor')}>
                <img className={cx('avatar')} src={data.user.avatar} alt="" />
                <h5 className={cx('name')}>
                    <b>{`${data.user.first_name} ${data.user.last_name} `}</b>
                </h5>
                <h6 className={cx('nickname')}>
                    {data.user.nickname}
                    {data.user.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('tick')} />}
                </h6>
                <PopupAppear CustomButton={BtnFollowing} />
            </div>
        </div>
    );
}

FollowingItem.propTypes = {
    data: PropTypes.object,
};

export default FollowingItem;
