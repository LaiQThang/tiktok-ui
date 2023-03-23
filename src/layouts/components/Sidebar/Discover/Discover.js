import style from './Discover.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Buttons';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

function Discover({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('hastagItem')}>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faHashtag} />}>
                    suthatla
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faHashtag} />}>
                    mackedoi
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faHashtag} />}>
                    sansangthaydoi
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faMusic} />}>
                    Yêu Đơn Phương Là Gì - hon Lyrics Video by Huong Ly
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faMusic} />}>
                    Về Nghe Mẹ Ru - Bạch Tuyết (NSND), Hoàng Dũng, Hứa Kim
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faMusic} />}>
                    Thiên thần tình yêu - Ricky Star, T.R.I
                </Button>

                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faHashtag} />}>
                    7749hieuung
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faHashtag} />}>
                    genzlife
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faMusic} />}>
                    Tình Đã Đầy Một Tim - Huyền Tâm Môn
                </Button>
                <Button className={cx('hastag')} rounded leftIcon={<FontAwesomeIcon icon={faMusic} />}>
                    Thằng Hầu (DinhLong Remix) - Nhật Phong
                </Button>
            </div>
        </div>
    );
}

export default Discover;
