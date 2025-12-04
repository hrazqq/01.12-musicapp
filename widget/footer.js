import Image from 'next/image';
import logo from '../public/logo.svg'

import styles from './footer.module.css';

export const Footer = () =>{
    return(
        <div className={styles.footer}>
            <Image src={logo} alt='logo'/>
             <div className='last_name'>
                <p>2025 MUSIC © Браун</p>
            </div>       
        </div>
        
        
    )
}