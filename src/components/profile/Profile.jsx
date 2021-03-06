import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                    newPostText = {props.profilePage.newPostText}
                    dispatch = {props.dispatch}
            />
        </div>
    );
}

export default Profile;