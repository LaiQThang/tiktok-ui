import style from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('linkContainer')}>
                <a className={cx('container')} href="/google.com" target="_blank">
                    Ablout
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Newsroom
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Contact
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Careers
                </a>
                <a className={cx('container')} href="" target="_blank">
                    ByteDance
                </a>
            </div>

            <div className={cx('linkContainer')}>
                <a className={cx('container')} href="/google.com" target="_blank">
                    TikTok for Good
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Adventise
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Developers
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Transparency
                </a>
            </div>

            <div className={cx('linkContainer')}>
                <a className={cx('container')} href="/google.com" target="_blank">
                    Help
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Safety
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Terms
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Privacy
                </a>
                <a className={cx('container')} href="" target="_blank">
                    Creator Portal
                </a>
                <a className={cx('container')} href="" target="_blank">
                    CommunityGuldelines
                </a>
            </div>
            <span className={cx('copyright')}>@ 2023 TikTok</span>
        </div>
    );
}

export default Footer;
