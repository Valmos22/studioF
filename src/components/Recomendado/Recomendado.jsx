import style from './style.module.css';

import reco from '../../utils/recomendado.json';

const Recomendado = () => {
    return (
        <>
            <div className={style.container_recomendado}>
                <h2 className={style.recp_h2}>
                    <span>quizá te pueda interesar</span>
                </h2>


                <div className={style.shelf}>
                    {reco.recomendados.map((item, index) => (
                        <div key={index} className={style.product}>
                            <div className={style.img_reco}>
                                <img src={item.img}></img>
                            </div>
                            <p className={style}>{item.name}</p>
                            <span className={style}>{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Recomendado