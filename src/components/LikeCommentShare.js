import React from 'react';
import './LikeCommentShare.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCoffee, faCommentAlt, faShare, faSortDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function LikeCommentShare() {
    return (
        <React.Fragment>
            <div className="LKSwrapper">
                <div><FontAwesomeIcon icon={faThumbsUp}/> Like</div>
                <div><FontAwesomeIcon icon={faCommentAlt}/> Comment</div>
                <div><FontAwesomeIcon icon={faShare}/> Share</div>
                <div><img
          className='ProfileImage'
          src='https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/118881626_3369373789752261_450760895870403241_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeE4M023gvfJBfN8YLbvQ0n6vXjbhXmdpx29eNuFeZ2nHVCLnQUiGQ5DO1n2fXuABSASM-Pdzqq14KsGSHJOiaLs&_nc_ohc=FMd1y2Fl0OQAX9pyBRP&_nc_ht=scontent-lht6-1.xx&oh=7afbe9775902071ba1ff9227ec5bb65a&oe=5F983C9B'
          alt='profile'
          width='40'
          style={{marginRight:'0px'}}
        /><FontAwesomeIcon icon={faSortDown}/></div>
            </div>
        </React.Fragment>
    )
}

export default LikeCommentShare
