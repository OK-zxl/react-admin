import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import CustomMenu from "@/components/CustomMenu";

const { Sider } = Layout;

const AppAside = props => {
  let { menuToggle, menu } = props;
  return (
    <Sider className="aside" collapsed={menuToggle}>
      <div className="logo">
        <a
          rel="noopener noreferrer"
          href="https://github.com/OK-zxl"
          target="_blank"
        >
          react管理系统
        </a>
      </div>
      <CustomMenu menu={menu}></CustomMenu>
    </Sider>
  );
};

AppAside.propTypes = {
  menuToggle: PropTypes.bool,
  menu: PropTypes.array.isRequired
};

export default AppAside;
