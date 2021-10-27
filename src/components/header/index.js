import React, { Component } from 'react'
import { Layout } from 'antd'
import "./header.scss"

const { Header } = Layout
class Dheader extends Component {
    render() {
        return(
            <div className="dx-header">
                <div className="dx-header-logo"></div>
                <div className="dx-header-user"></div>
                <div className="dx-header-upload">文稿上传</div>
                <div className="dx-header-nav">
                    <ul>
                        <li>
                            <a href="#">我的上传</a>
                        </li>
                        <li>
                            <a href="#">移动端</a>
                        </li>
                        <li>
                            <a className="nav-Web" href="#" style={{color:'#3a5efb'}}>Web端</a>
                        </li>
                    </ul>
                </div>
            </div>
        )  
    }
}

export default Dheader