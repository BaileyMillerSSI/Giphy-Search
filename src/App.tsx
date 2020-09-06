import React from "react";
import { Row, Col, Form, Layout } from "antd";
import SearchBox from "./feature/form/SearchBox";
import RatingSelect from "./feature/form/RatingSelect";
import Results from "./feature/results/Results";
import './App.css'
import SiteFooter from "./feature/footer/Footer";
const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header className="bkgd_white">
      <Form className="form">
        <Row gutter={16}>
          <Col>
            <SearchBox />
          </Col>
          <Col>
            <RatingSelect />
          </Col>
        </Row>
      </Form>
    </Header>
    <Content className="bkgd_white">
      <Results />
    </Content>
    <Footer className="bkgd_white footer">
      <SiteFooter/>
    </Footer>
  </Layout>
);

export default App;
