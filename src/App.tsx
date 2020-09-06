import React from "react";
import { Row, Col, Form, Layout, Space } from "antd";
import SearchBox from "./feature/form/SearchBox";
import RatingSelect from "./feature/form/RatingSelect";
import Results from "./feature/results/Results";
import "./App.css";
import SiteFooter from "./feature/footer/Footer";
const { Header, Content, Footer } = Layout;

const App = () => (
    <Layout className="bkgd_white">
      <Header className="bkgd_white">
        <Form className="form">
          <Row gutter={16} justify="center">
            <Col>
              <SearchBox />
            </Col>
            <Col>
              <RatingSelect />
            </Col>
          </Row>
        </Form>
      </Header>
      <Content className="bkgd_white space-top">
        <Results />
      </Content>
      <Footer className="bkgd_white space-top footer">
        <SiteFooter />
      </Footer>
    </Layout>
);

export default App;
