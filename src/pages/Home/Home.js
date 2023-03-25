import {
    faMusic,
    faPause,
    faPlay,
    faVolumeXmark,
    faVolumeUp,
    faHeart,
    faShare,
    faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import Button from '~/components/Buttons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountPreview } from '~/components/SuggestedAccounts/AccountPreview';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function HomeItem({ data }) {
    const refVideo = useRef();

    const [videoState, setVideoState] = useState(false);
    const [volumeState, setVolumeState] = useState(false);

    const handlePlay = () => {
        refVideo.current.play();
        setVideoState(true);
    };
    const handlePause = () => {
        refVideo.current.pause();
        setVideoState(false);
    };
    const handleMute = () => {
        setVolumeState(true);
    };
    const handleUnMute = () => {
        setVolumeState(false);
    };

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data.user} />
                    <p className={cx('bio')}>{data.user.bio}</p>
                </PopperWrapper>
            </div>
        );
    };

    const tag = data.allows.map((result) => {
        return '#' + result;
    });

    return (
        <div className={cx('topic')}>
            <div>
                <HeadlessTippy
                    zIndex={1}
                    delay={[1000, 800]}
                    interactive
                    render={renderPreview}
                    placement="bottom-start"
                >
                    <img src={data.user.avatar} alt={data.user.nickname} className={cx('avatar')} />
                </HeadlessTippy>
            </div>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <div className={cx('title-infor')}>
                        <h3 className={cx('nickname')}>{data.user.nickname}</h3>
                        <h4 className={cx('name')}>
                            {data.user.first_name} {data.user.last_name}{' '}
                        </h4>
                    </div>
                    <p className={cx('text')}>
                        {data.description}
                        <strong className={cx('tag')}>{tag.join('')}</strong>{' '}
                    </p>

                    <Button text leftIcon={<FontAwesomeIcon icon={faMusic} />} className={cx('music')}>
                        {data.music}
                    </Button>
                    <Button outline className={cx('follow')}>
                        Follow
                    </Button>
                </div>

                <div className={cx('video')}>
                    <div className={cx('video-container')}>
                        <video
                            ref={refVideo}
                            loop={true}
                            muted={volumeState}
                            autoPlay={true}
                            className={cx('video-play')}
                            src={data.file_url}
                        />
                        {!videoState ? (
                            <button className={cx('play')} onClick={handlePlay}>
                                <FontAwesomeIcon icon={faPlay} className={cx('icon-play')} />
                            </button>
                        ) : (
                            <button className={cx('play')} onClick={handlePause}>
                                <FontAwesomeIcon icon={faPause} className={cx('icon-pause')} />
                            </button>
                        )}

                        {!volumeState ? (
                            <button className={cx('volume')} onClick={handleMute}>
                                <FontAwesomeIcon icon={faVolumeUp} className={cx('icon-mute')} />
                            </button>
                        ) : (
                            <button className={cx('volume')} onClick={handleUnMute}>
                                <FontAwesomeIcon icon={faVolumeXmark} className={cx('icon-unmute')} />
                            </button>
                        )}

                        <div className={cx('actions')}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faHeart} className={cx('action-icon')} />
                            </button>
                            <strong className={cx('action-text')}>{data.likes_count}</strong>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCommentDots} className={cx('action-icon')} />
                            </button>
                            <strong className={cx('action-text')}>{data.comments_count}</strong>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faShare} className={cx('action-icon')} />
                            </button>
                            <strong className={cx('action-text')}>{data.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeItem;
