import { faGears } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Live() {
    return (
        <div style={{ color: '#fe2c55', display: 'flex', alignItems: 'center' }}>
            <h1>PAGE LIVE ĐANG TRONG QUÁ TRÌNH XỬ LÝ </h1>
            <FontAwesomeIcon icon={faGears} style={{ marginLeft: '10px', fontSize: '3rem' }} />
        </div>
    );
}

export default Live;
