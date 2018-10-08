import * as React from "react";
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import {connect} from "react-redux";
import StoreState from "../types/StoreState";
import {bindActionCreators, Dispatch} from "redux";
import {fetchTodo, FetchTodoAction} from "../actions/todoActions";
import Todo from "../models/Todo";
import TodoComponent from "../components/Todo";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle
});

interface Props {
    fetchTodo: FetchTodoAction;
    todo: Todo,
}

class HomeScreen extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchTodo(1);
    }

    render() {
        return <View style={styles.container}>
            {this.props.todo ? <TodoComponent todo={this.props.todo}/> : <Text>Loading</Text>}
        </View>
    }
}

const mapState = (state: StoreState) => ({
    todo: state.todo.todo as Todo,
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        fetchTodo
    },
    dispatch
);

export default connect(mapState, mapDispatch)(HomeScreen);