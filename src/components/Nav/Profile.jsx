import React from 'react';
import { Link } from "react-router-dom";
import Image from '../Image/Image.js';

import {
  profileSquare,
  heyThere,
  linkedIn,
  github,
  twitter,
} from '../../assets';

const Profile = _ => {
  return (
    <div className='NavProfile'>
      <div className='ProfileImageWrapper'>
        <Link to="/">
          <Image width={80} height={80} round={true} src={profileSquare} alt="Profile" />
          <Image width={80} height={40} cName="ProfileImageOverlay" src={heyThere} alt="Hey there!" />
        </Link>
      </div>
      <div>
        <p className='h7'>kimryan0416[AT]gmail.com</p>
        <div className='ProfileSocialLinksContainer'>
          <a href='https://www.linkedin.com/in/kimryan0416/' target='_blank' rel="noopener noreferrer">
            <Image width={16} height={16} src={linkedIn} alt="LinkedIn" cName="ProfileSocialMediaIcon" />
          </a>
          <a href='https://github.com/kimryan0416' target='_blank' rel="noopener noreferrer">
            <Image width={16} height={16} src={github} alt="Github" cName='ProfileSocialMediaIcon' />
          </a>
          <a href='https://twitter.com/ryankimdev' target='_blank' rel="noopener noreferrer">
            <Image width={16} height={16} src={twitter} alt="Twitter" cName='ProfileSocialMediaIcon' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;