import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import RightFooter from '../RightFooter';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>

                <RightFooter />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
