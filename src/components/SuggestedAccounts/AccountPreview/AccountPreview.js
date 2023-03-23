import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import Button from '~/components/Buttons';
import style from './AccountPreview.module.scss';

const cx = classNames.bind(style);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avtar')} src={data.avatar} alt={data.nickname} />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}> {`${data.first_name} ${data.last_name}`}</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>{data.followers_count}</strong>
                <span className={cx('label')}> Followers</span>
                <strong className={cx('value')}>{data.likes_count} </strong>
                <span className={cx('label')}> Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
