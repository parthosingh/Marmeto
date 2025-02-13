
import styles from './Footer.module.css'

import Frame2 from "../assets/images/Frame2.png"
import Frame4 from "../assets/images/Frame4.png"
import Frame5 from "../assets/images/Frame5.png"
import Frame19 from "../assets/images/Frame19.png"
function Footer(){
    return(
        <>
        <div className={styles.footer}>
            
            <div>
                  <img src={Frame2} alt="User Icon" />
            </div>
            <div>
                  <img src={Frame4} alt="User Icon" />
            </div>
            <div>
                  <img src={Frame5} alt="User Icon" />
            </div>
            <div>
                  <img src={Frame19} alt="User Icon" />
            </div>
        </div>
        </>
    )
}

export default Footer