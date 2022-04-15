import React from "react";
import classes from "../styles/Header.module.css";
import { Button, Space } from "antd";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.main}>
        <div className={classes.left}>
          <h1>
            ATools<span style={{color: '#FB8500'}}>.</span>{" "}
          </h1>
        </div>

        <div className={classes.right}>
          <Space>
            <Button type="primary" size="large" className={classes.headerBtn1}>
              Start Free Trail
            </Button>
            <Button type="primary" size="large" className={classes.headerBtn2}>
              Login
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Header;
