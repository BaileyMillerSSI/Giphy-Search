import React from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import { State } from "../../redux/State";
import { DispatchTypes } from "../../redux/Actions";
import { IGif } from "@giphy/js-types";
import ImageCard from "../imageCard/ImageCard";
import "./Results.css";

const mapStateToProps = (state: State) => ({
  data: state.results,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: DispatchTypes) => ({});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const getCards = (data: IGif[]): JSX.Element[] =>
  data.map((value: IGif) => (
    <div className="result" key={value.id}>
      <ImageCard key={value.id} {...value} />
    </div>
  ));

const Results = ({ data, isLoading }: Props) => (
  <Spin spinning={isLoading}>
    <div className="results">{getCards(data)}</div>
  </Spin>
);
export default connect(mapStateToProps, mapDispatchToProps)(Results);
