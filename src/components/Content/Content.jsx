import React from "react";
import Header from "../Header/Header";
import './Content.scss'

const Content = () => {
    return (
    <div className="content">
        <div className="content-dark">
            <Header/>
            <div className="content-dark__information">
                Find your job today!
            </div>

        </div>
    </div>)
}
export default Content