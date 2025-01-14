import CustomLi from '../CustomLi/CustomLi';
import style from './style.module.css';

import { faBusinessTime, faCreditCard, faShield, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {
    return (
        <div className={style.container_benefits}>
            <div className={style.benefits}>
                <CustomLi title={"Seguimiento de mis pedidos"} icon={faTruckFast} isBarra={true} />
                <CustomLi title={"Compra rápido y seguro"} icon={faShield} isBarra={true} />
                <CustomLi title={"Asesoría personalizada"} icon={faBusinessTime} isBarra={true} />
                <CustomLi title={"Múltiples medios de pago"} icon={faCreditCard} isBarra={true} />
            </div>
        </div>
    )
}

export default Benefits