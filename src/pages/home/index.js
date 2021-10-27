import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Dheader from '../../components/header';
import './home.scss';

const { Header, Content, Footer, Sider } = Layout;
class Home extends Component {
    render() {
        return(
          <Layout>
            <Dheader />
            <Layout>
              <Sider
                style={{
                  overflow: 'auto',
                  height: '100vh',
                  position: 'fixed',
                  left: 0,
                  width: 240,
                  marginTop:64,
                }}
              >
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                     下拉刷新
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                     缺省动画
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                     目录分类三
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                     目录分类四
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                     目录分类五
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                     目录分类六
                    </Menu.Item>
                  </Menu>
             </Sider>
             <Layout className="site-layout" style={{ marginLeft: 200 }}>
               <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                 <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                   ...
                   <br />
                   Really
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   long
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   ...
                   <br />
                   content
                 </div>
               </Content>
             </Layout>
            </Layout>
          </Layout>
        )
    }
}

 export default Home