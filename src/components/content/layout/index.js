import React, { Component } from 'react';
import ContentItem from '../contentItem';
import './layout.scss'

class ContentLayout extends Component {
    render() {
        const uploadedItem1 = 12;
        const uploadItems = [];
        for (let i = 0; i < 12; i++) {
          uploadItems.push(
            <ContentItem data-index={i} />
          )

        }
        return (
            <div className="dx-web-content-part1">
            <div className="dx-web-content-part1-title1">{this.props.name}</div>
            <div className="dx-web-content-part1-container">                  
                {uploadItems}
            </div>
          </div>
        )
    }
}

export default ContentLayout