import logoWp from '../../../public/whatsapp.png'
import logoIg from '../../../public/insta.png'
import logoMap from '../../../public/maps.png'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import email from '../../../public/logoEmail.png'

export default function Footer() {
    return (
        <div className="footerContainer">

             <div className='contactFooter'>
                <NavLink to='/form'>
                    <img src={email} alt="email" className='logosFooterEmail email' />
                </NavLink>
            </div> 

            <div className='iconsFooter'>
                <a href="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0" target="_blank"><img src={logoWp} alt="logoWp" className='logosFooter' /></a>

                <a href='https://www.instagram.com/widistoreok__' target='_blank'><img src={logoIg} alt="logoIg" className='logosFooter' /></a>

                <a href='https://www.google.com/maps/place/Puerto+Pampa/@-34.6278066,-58.3646852,17z/data=!3m1!4b1!4m6!3m5!1s0x95a334c89e8c7485:0x459e0fd876ebc5b5!8m2!3d-34.6278111!4d-58.3600718!16s%2Fg%2F11c3wvs87j?entry=ttu' target='_blank'><img src={logoMap} alt="logoMap" className='logosFooter' /></a>
            </div>

        </div>
    )
}