import Styles from './ContactSupport.module.css'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from'react-router-dom'
import contactImage from '../../../assets/ContactImage/Strong.jpeg'
import { CallIcon, CloseRoundedIcon, EmailRoundedIcon, FacebookRoundedIcon, InstagramIcon, PinDropIcon } from '../Icons/IconsLibrary'
import logoImage from "../../../assets/Image/hestiaAgora-logo.png"
import LinkedIn from '@mui/icons-material/LinkedIn'

function ContactSupport() {

  const [ closed, setClosed] = useState(false);

  const handleClose =() =>{
    setClosed(true)
  }

  const boxRef = useRef();

  useEffect (()=>{
    document.addEventListener("mousedown",(even)=>{
      if (!boxRef.current.contains(even.target)){
        setClosed(true)
      }
    })
  },[])
  return (
    !closed &&(
    <div className={Styles.contactContainer}>
        <div ref={boxRef} className={Styles.contactBox}>
          <div className={Styles.topRow}>
            <div className={Styles.imageBox}>
              <img src={contactImage} alt='an elderly woman'/>
            </div>
            <div className={Styles.informationBox}>
              <button className={Styles.close} onClick={handleClose}><CloseRoundedIcon/></button>
              <div className={Styles.logoImage}>
                <img src={logoImage} alt='hestia agora brand logo image' />
              </div>
              <p>
              Hestia Agora is a SaaS start-up with the goal to make elderly health care more proactive through our
              services and digital solutions.  Together with municipalities, Regions and private care providers, 
              we develop and provide the smartest solutions that estimate how much costs municipalities can save and
              invest that in implementing a broader range of preventive 
              interventions by shifting the focus from reactive care to proactive care.
              </p>
              <div className={Styles.followUs}>
                <h2>Follow Us</h2>
                <div className={Styles.socialMedia}>
                  <Link to="https://www.facebook.com/profile.php?id=100093138129488"><FacebookRoundedIcon/></Link>
                  <Link to="https://www.linkedin.com/company/hestiaagora-servicebolag/people/"><LinkedIn/></Link>
                  <Link to="https://instagram.com/hestiaagora?igshid=MzRlODBiNWFlZA=="><InstagramIcon/></Link>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.bottomRow}>
            <div className={Styles.callBox}>
              <CallIcon/>
              <h4>Call Us</h4>
              <p>+46 (0) 709 514 034</p>
            </div>
            <div className={Styles.locationBox}>
              <PinDropIcon/>
              <h4>Address</h4>
              <p>Medeon Science Park 20512, Malmö, Sverige</p>
            </div>
            <div className={Styles.emailBox}>
              <EmailRoundedIcon/>
              <h4>Email</h4>
              <p>servicedesk@hestiaagora.com</p>
            </div>
          </div>
        </div>
    </div>
  ))
}

export default ContactSupport