import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import classes from "../styles/Login.module.css";
import LoginService from "../services/login";

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const email = values.email;
    const password = values.password;
    LoginService.login(email, password).then((res) => 
    {
      Modal.success({
        content: `Token: ${res.data.token}`,
      });
    }
    ).catch((err) => {
      Modal.error({
        content: err.response.data.error,
      });
    }).finally(() => {
      form.resetFields();

    })

  };
  
  return (
    <div className={classes.loginMain}>
      <h1 className={classes.title}>Welcome Back</h1>
      <p className={classes.subTitle}>
        <small style={{ color: "grey" }}>Sub title text goes here</small>
      </p>

      <div className={classes.buttonGrp}>
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input size="large" type="email" placeholder="Email address *" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className={classes.pass}
              size="large"
              placeholder="Password *"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className={classes.loginBtn}
          >
            Login
          </Button>

          <div className={classes.checkbox}>
            <div className={classes.remember}>
              <Checkbox defaultChecked={false} className={classes.mycheckbox} />
              <p style={{ marginLeft: ".5rem" }}>Remember Password</p>
            </div>
            <div>
              <p>Forgot Password?</p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
