import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(style);
const func = () => {};

function SuggestedAccounts({ label, accounts = [], more = true, handleSeeAll = func, handleSeeLess = func }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accounts.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
            {more && (
                <button className={cx('more-all')} onClick={handleSeeAll}>
                    See all
                </button>
            )}

            {!more && (
                <button className={cx('more-less')} onClick={handleSeeLess}>
                    See less
                </button>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    accounts: PropTypes.array,
    more: PropTypes.bool,
    handleSeeAll: PropTypes.func,
    handleSeeLess: PropTypes.func,
};

export default SuggestedAccounts;
