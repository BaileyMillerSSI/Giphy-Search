import React from "react";
import { DispatchTypes, ActionTypes } from "../../redux/Actions";
import { State } from "../../redux/State";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import { updateSearchText } from '../../redux/ActionCreators'

const mapStateToProps = (state: State) => ({
  isValid: state.validation.isTextValid,
  text: state.filters.searchText
});

const mapDispatchToProps = (dispatch: DispatchTypes) => ({
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => dispatch(updateSearchText(value.target.value))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SearchBox = ({ text, onChange, isValid }: Props) => (
  <Form.Item
  required={true}
  colon={false}
  validateStatus={isValid ? 'success' : 'error'}
  help={isValid ? '': 'Enter a search term'}
  >
    <Input
      allowClear
      placeholder="Search for GIF"
      type="text"
      value={text}
      onChange={onChange}
    />
  </Form.Item>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
