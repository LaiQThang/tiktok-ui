import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default Sidebar;
