import React from "react";
import { connect } from "react-redux";
import { Select, Form } from "antd";
import { State } from "../../redux/State";
import { DispatchTypes } from "../../redux/Actions";
import { updateRating } from "../../redux/ActionCreators";
import { Rating } from "../../models/Filters";
const { Option } = Select;

const mapStateToProps = (state: State) => ({
  isLoading: state.isLoading,
  rating: state.filters.rating,
});

const mapDispatchToProps = (dispatch: DispatchTypes) => ({
  onChange: (value: Rating) => dispatch(updateRating(value))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const RatingSelect = ({ rating, onChange }: Props) => (
  <Form.Item required={true} colon={false}>
    <Select
      style={{ width: "150px" }}
      placeholder="Select a rating"
      optionFilterProp="children"
      value={rating}
      onChange={onChange}
    >
      <Option value={'g'}>G</Option>
      <Option value={'pg'}>PG</Option>
      <Option value={'pg-13'}>PG13</Option>
      <Option value={'r'}>R</Option>
    </Select>
  </Form.Item>
);

export default connect(mapStateToProps, mapDispatchToProps)(RatingSelect);
