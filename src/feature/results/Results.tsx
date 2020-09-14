import React from "react";
import { connect } from "react-redux";
import { List } from "antd";
import { State } from "../../redux/State";
import { DispatchTypes } from "../../redux/Actions";
import { IGif } from "@giphy/js-types";
import ImageCard from "../imageCard/ImageCard";
import InfiniteScroll from "react-infinite-scroller";
import { loadMore } from "../../redux/ActionCreators";
import './Results.css';

const mapStateToProps = (state: State) => ({
  data: state.results,
  hasMore: state.hasMore,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: DispatchTypes) => ({
  loadMore: () => dispatch(loadMore()),
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const getCard = (data: IGif): JSX.Element => (
  <List.Item>
    <ImageCard {...data} />
  </List.Item>
);

const Results = ({ data, isLoading, hasMore, loadMore }: Props) => (
  <div className="scroll-container">
    <InfiniteScroll
      initialLoad={false}
      pageStart={0}
      loadMore={loadMore}
      hasMore={!isLoading && hasMore}
      useWindow
    >
      <List
        style={{ display: "flex", justifyContent: "center" }}
        grid={{ gutter: 16 }}
        loading={isLoading}
        dataSource={data}
        renderItem={getCard}
        rowKey={(gif: IGif) => gif.id.toString()}
      />
    </InfiniteScroll>
  </div>
);
export default connect(mapStateToProps, mapDispatchToProps)(Results);
