import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Following.module.scss';
import FollowingItem from './FollowingItem';
import * as services from '~/Services/Service';

const cx = classNames.bind(style);

function Following() {
    const [topicFollowing, setTopicFollowing] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await services.FollowingLayout('for-you', 8);

            if (topicFollowing.length === 0) {
                setTopicFollowing(result);
            } else {
                setTopicFollowing((prv) => [...prv, result]);
            }
        };

        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            {topicFollowing.map((topic, index) => (
                <FollowingItem key={index} data={topic} />
            ))}
        </div>
    );
}

export default Following;
