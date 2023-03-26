import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import HomeItem from './Home';

import * as Services from '~/Services/Service';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    const [videoTopic, setVideoTopic] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await Services.VideoTopic('for-you', 2);
            if (videoTopic.length === 0) {
                setVideoTopic(result);
            } else {
                setVideoTopic((prv) => [...prv, ...result]);
            }
        };

        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            {videoTopic.map((topic) => (
                <HomeItem key={topic.id} data={topic} />
            ))}
        </div>
    );
}

export default Home;
