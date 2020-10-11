import { faComments, faGlobeEurope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './PagesManageBar.css';

function PagesManageBar() {
    return (
        <React.Fragment>
            <section className="ManageWrapper">
                    <img
                className='ProfileImage'
                src='https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/71118937_521157945353271_5881430689320009728_n.png?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeEX_Z1y9HzzwJ5RrSFV2FqWOSWRGNIkKWk5JZEY0iQpabOAaMaYAPR_Dpc_cbkkGP7IBOvxlfq8cVqyRC1B4IUx&_nc_ohc=_No9RpUyg84AX_waTDB&_nc_ht=scontent-lht6-1.xx&oh=942ee88ba2f1f5fe3bc3bf4e74bdd00a&oe=5FA7863A'
                alt='profile'
                width='60'
                />
                <section>
                <h2>Jason Lovell</h2>
                <h4>5 · Artist · 139 likes · 139 follows</h4>
            </section>
            <section className="NotifMess">
            <p><FontAwesomeIcon icon={faGlobeEurope} /> Notifications</p>
                <p><FontAwesomeIcon icon={faComments} /> Messages</p>
            </section>
            </section>

            <section className="ManageWrapper">
                    <img
                className='ProfileImage'
                src='https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/19430168_1488160744538651_6500653761936424293_n.png?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeFjWBEv90EmdljHsbNDpJV6yrK6gp3wbnPKsrqCnfBuc5oE5Xb3_m_-6-YplazrRnyE59dP7sV6yZDrE95h85-c&_nc_ohc=jeHAGMWW340AX8YImUQ&_nc_ht=scontent-lht6-1.xx&oh=4243ef7f75dedc5d1511335a9bba3182&oe=5FA7B056'
                alt='profile'
                width='60'
                />
                <section>
                <h2>Lovell FOOD</h2>
                <h4>5 · Artist · 139 likes · 139 follows</h4>
            </section>
            <section className="NotifMess">
                <p><FontAwesomeIcon icon={faGlobeEurope} /> Notifications</p>
                <p><FontAwesomeIcon icon={faComments} /> Messages</p>
            </section>
            </section>
            <section className="ManageWrapper">
                    <img
                className='ProfileImage'
                src='https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/50234285_359626257950095_776065564928901120_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFjWbUrtnfkh-i5VMXZXgpm9ubYQuI041_25thC4jTjXyCwCpoJznepfEtq2fWG8XgiKHf2AtpHF3Ym_6_HPOEx&_nc_ohc=AcvHVZ0dYNoAX8P0cxj&_nc_ht=scontent-lhr8-1.xx&oh=77a47e67f4c10a3073097ad91d136f69&oe=5FA6F0B4'
                alt='profile'
                width='60'
                />
                <section>
                <h2>ZDT Windows and Doors</h2>
                <h4>5 · Artist · 139 likes · 139 follows</h4>
            </section>
            <section className="NotifMess">
            <p><FontAwesomeIcon icon={faGlobeEurope} /> Notifications</p>
                <p><FontAwesomeIcon icon={faComments} /> Messages</p>
            </section>
            </section>
        </React.Fragment>
    )
}

export default PagesManageBar
