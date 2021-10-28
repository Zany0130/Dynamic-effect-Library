import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import Dheader from '../../components/header';
import ContentItem from '../../components/content/contentItem';
import ContentLayout from '../../components/content/layout';
import './web.scss';

const { Header, Content, Footer, Sider } = Layout;
class Web extends Component {
    render() {

      const contentTitles = ['下拉刷新','缺省动画','目录分类三','目录分类四','目录分类五','目录分类六'];
      const contentLayouts = [];
      for (let i = 0; i< contentTitles.length; i++) {
        contentLayouts.push(
          <ContentLayout name={contentTitles[i]}/>
        )
      }
        return(
          <div className="dx-web">
            <Dheader/>
            <div>
              <div className="dx-web-sider">
                <ul className="dx-web-sider-menu">
                  <li><span>下拉刷新</span></li>
                  <li><span>缺省动画</span></li>
                  <li><span>目录分类三</span></li>
                  <li><span>目录分类四</span></li>
                  <li><span>目录分类五</span></li>
                  <li><span>目录分类六</span></li>
                </ul>
             </div>
            </div>
            <div className="dx-web-content">
              {contentLayouts}
            </div>
          </div>
        )
    }
}

 export default Web