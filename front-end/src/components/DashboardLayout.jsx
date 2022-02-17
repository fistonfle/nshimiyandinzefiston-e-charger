import { Layout, Menu, Breadcrumb, Space } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "../styles/dashboard-layout.css";
import { BillsForm } from "./Form";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DashboardLayout = () => {
  const [collapse, setcollapsed] = useState(false);

  const onCollapse = () => setcollapsed(!collapse);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
        <div className="logo text-center">E-CHARGER</div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Billings
          </Menu.Item>
          <Menu.Item key="9" icon={<DesktopOutlined />}>
            Reports
          </Menu.Item>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Bills">
            <Menu.Item key="6">Electricity</Menu.Item>
            <Menu.Item key="8">Cash power</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Bills</Breadcrumb.Item>
            <Breadcrumb.Item>Electricity Bills Service</Breadcrumb.Item>
          </Breadcrumb>

          {/* <CustomizedTable data={templatedata} /> */}

          <Space direction="horizontal">
            <BillsForm />
          </Space>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          E-CHARGER &copy; 2022. All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
};
