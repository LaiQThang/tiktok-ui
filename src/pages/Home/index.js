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

            setVideoTopic((prv) => [...prv, ...result]);
        };

        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            {videoTopic.map((topic, index) => (
                <HomeItem key={index} data={topic} />
            ))}
        </div>
    );
}

export default Home;
