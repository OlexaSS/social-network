import React from "react";
import image from '../assets/images/main-img.jpg';

const Profile = () => {
    return (
        <div className="content">
            <div className="img-wrapper">
                <img className="profile-img" src={image} />
            </div>
            <div className="content-inner">
                <div className="content-ava">ava</div>
                <div className="content-descr">descr</div>
            </div>
            <div className="posts">
                My posts
					<div className="new-post">
                    new post
					</div>
                <div>
                    post 1
					</div>
                <div>
                    post 2
					</div>
            </div>
        </div>
    );
}

export default Profile;