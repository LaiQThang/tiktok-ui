import style from './Header.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { MessageIcon, NotificationIcon, UploadIcon } from '~/components/Icons';
import images from '~/assets/images';
import Button from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        tittle: 'English',
        children: {
            tittle: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    tittle: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    tittle: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        tittle: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        tittle: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            tittle: 'View profile',
            to: '@thang0308',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            tittle: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            tittle: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            tittle: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('inner-img')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Button loginUp leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                    Upload
                                </Button>

                                <Tippy content="Create effects" placement="bottom" delay={[0, 100]}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Messages" placement="bottom" delay={[0, 100]}>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Inbox" placement="bottom" delay={[0, 100]}>
                                    <button className={cx('action-btn')}>
                                        <NotificationIcon className={cx('action-icon')} />
                                        <span className={cx('action-notification')}>29</span>
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/715fafea362460f0bc3b9e49c18683f6~c5_100x100.jpeg?x-expires=1678935600&x-signature=EJXj1yxiymPsEUPGkWRF9xg4AyM%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                // fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a61b8a2764c36fe506beae76e2e1d607~c5_100x100.jpeg?x-expires=1679047200&x-signature=8tWKcC%2FST9EWYDBcGIpdZA2hTYU%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
