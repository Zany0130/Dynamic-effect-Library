import React, { Component } from 'react';
import './contentItem.scss';

class ContentItem extends Component {
    render() {
        return (
            <div className="dx-content">
               <div className="content-item">  </div>
               <div className="content-itemName">文件标题</div>
               <div className="content-uploadTime">2020-12-01</div>
            </div>
        )
    }
}

export default ContentItem