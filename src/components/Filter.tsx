import React from "react";
import { connect } from "react-redux";

import {
  toggleShowImportant,
  toggleShowDone
} from "../store/filter/todoFilterActions";

import { TodoFilter } from "../store/filter/todoFilterType";
import { AppState, AppActions } from "../store/index";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

interface FilterProps {}
interface FilterState {}
type Props = FilterProps & LinkStateProps & LinkDispatchProps;

const Filter = (props: Props) => {
  return (
    <div>
      <h3>Filter todos</h3>
      <div>
        <button onClick={() => props.toggleShowImportant()}>
          {(!props.filter.showImportant).toString()}
        </button>{" "}
        Show only important
        <br />
        <button onClick={() => props.toggleShowDone()}>
          {props.filter.showDone.toString()}
        </button>{" "}
        Show done
        <br />
      </div>
    </div>
  );
};

interface LinkStateProps {
  filter: TodoFilter;
}
interface LinkDispatchProps {
  toggleShowImportant: () => void;
  toggleShowDone: () => void;
}

const mapStateToProps = (state: AppState) => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  toggleShowImportant: bindActionCreators(toggleShowImportant, dispatch),
  toggleShowDone: bindActionCreators(toggleShowDone, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
