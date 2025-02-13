import React from 'react';
import styles from './Headers.module.css'; 

import Frame168 from '../assets/images/Frame168.png';
import Vector from '../assets/images/Vector.png';
import HeartIcon from '../assets/images/akar-icons_heart.png';
import CartIcon from '../assets/images/ant-design_shopping-cart-outlined.png';
import Group78 from '../assets/images/Group78.png';

function Headers() {
    return (
        <>
            <div className={styles.Parent}>
                <div className={styles.subParent}>
                    <img src={Frame168} alt="Logo" />
                </div>
                <div>Home</div>
                <div>Shop</div>
                <div>About</div>
                <div>Contact</div>
                <div>
                    <img src={Vector} alt="User Icon" />
                </div>
                <div>
                    <img src={HeartIcon} alt="Wishlist" />
                </div>
                <div>
                    <img src={CartIcon} alt="Cart" />
                </div>
            </div>

            <div className={styles.grandParent}>
                <img src={Group78} alt="Banner" />
            </div>
        </>
    );
}

export default Headers;
