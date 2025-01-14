import style from './style.module.css';

import camisetas from '../../assets/img/camisetas.webp';
import accessories from '../../assets/img/gorras.webp';
import jeans from '../../assets/img/jeans.webp';
import polos from '../../assets/img/polos.webp';

const Category = () => {
    return (
        <div className={style.category_container}>
            <div className={style.category}>
                <img src={jeans} alt="JEANS" />
                <div className={style.category_label}>JEANS</div>
            </div>
            <div className={style.category}>
                <img src={polos} alt="POLOS" />
                <div className={style.category_label}>ZAPATOS</div>
            </div>
            <div className={style.category}>
                <img src={camisetas} alt="CAMISETAS" />
                <div className={style.category_label}>VESTIDOS</div>
            </div>
            <div className={style.category}>
                <img src={accessories} alt="ACCESORIOS" />
                <div className={style.category_label}>ACCESORIOS</div>
            </div>
        </div>

    )
}

export default Category