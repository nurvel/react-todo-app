import React from "react";

import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";
import Filter from "../components/Filter";
import { connect } from "react-redux";
import { AppActions, AppState } from "../store";

const TodoScene = () => {
  return (
    <div>
      <h1>Redux todo app</h1>
      <NewTodo />
      <Filter />
      <Todos />
    </div>
  );
};


const mapStateToProps = (state: AppState) => {
    return {
      filter: state.filter
    };
  };
  
const mapDispatchToProps = (dispatch: React.Dispatch<AppActions>) => ({
    // toggleShowImportant: bindActionCreators(toggleShowImportant, dispatch),
    // toggleShowDone: bindActionCreators(toggleShowDone, dispatch)
  });

export const TodoSceneContainer =  connect(mapStateToProps, mapDispatchToProps)(TodoScene);