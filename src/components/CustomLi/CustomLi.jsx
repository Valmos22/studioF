import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import style from './style.module.css';

const CustomLi = ({ title, icon, isBarra }) => {

    return (
        <li className={style.li}>
            <a href="">
                <FontAwesomeIcon icon={icon} className={style.secondaryNav_icon} />
                <span className={style.secondaryNav_label}>{title}</span>
            </a>
        </li>
    )
}

CustomLi.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    isBarra: PropTypes.bool
};

export default CustomLi