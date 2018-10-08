import * as React from "react";
import {View, Text} from "react-native";
import Todo from "../models/Todo";

interface Props {
    todo: Todo
}

const TodoComponent = ({todo}: Props) => <View>
    <Text>ID: {todo.id}</Text>
    <Text>Title: {todo.title}</Text>
</View>;

export default TodoComponent;