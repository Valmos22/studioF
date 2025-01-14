import style from './style.module.css';

import taps from '../../utils/taps.json';

const Taps = () => {
    return (
        <>
            <div className={style.taps_container}>
                {taps.mainTaps.map((tap, index) => (
                    <div key={index} className={style.taps}>
                        {tap}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Taps