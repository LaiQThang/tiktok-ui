import { useEffect, useState } from 'react';
import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { LoginForOn } from './LoginForOn';
import { Discover } from './Discover';
import { Footer } from './Footer';
import * as Services from '~/Services/Service';

const cx = classNames.bind(style);
const currentUser = false;

function Sidebar() {
    const [accounts, setAccount] = useState([]);
    const [changeSee, setChangeSee] = useState('1');

    const [followingAccount, setFollowingAccount] = useState([]);
    const [changeFollowing, setChangeFollowing] = useState(3);

    useEffect(() => {
        const fetchApi = async () => {
            if (changeSee === '3') {
                return;
            }
            const result = await Services.suggestedUserList(changeSee);
            if (accounts.length === 0) {
                setAccount(result);
            } else {
                setAccount((prv) => [...prv, ...result]);
            }
        };

        fetchApi();
    }, [changeSee]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await Services.FollowingUserList(changeFollowing);
            if (followingAccount.length === 0) {
                setFollowingAccount(result);
            } else {
                setFollowingAccount((prv) => [...prv, ...result]);
            }
        };

        fetchApi();
    }, [changeFollowing]);

    const handleSeeAll = () => {
        setChangeSee('2');
    };

    const handleSeeLess = () => {
        setAccount(accounts.slice(0, 5));
        setChangeSee('3');
    };

    const handleSeeFollowing = () => {
        setChangeFollowing((prv) => prv + 1);
    };

    let more;
    if (accounts.length === 0 || accounts.length === 5) {
        more = true;
    } else {
        more = false;
    }

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {!currentUser && <LoginForOn label="Log in to follow creators, like videos, and view comments." />}

            {window.location.pathname === '/following' || (
                <SuggestedAccounts
                    label="Suggested accounts"
                    accounts={accounts}
                    more={more}
                    handleSeeAll={handleSeeAll}
                    handleSeeLess={handleSeeLess}
                />
            )}

            {currentUser && (
                <SuggestedAccounts
                    label="Following accounts"
                    accounts={followingAccount}
                    more={true}
                    handleSeeAll={handleSeeFollowing}
                />
            )}

            <Discover label="Discover" />

            <Footer />
        </aside>
    );
}

export default Sidebar;
