import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
export default function TodoList() {
    const { todos } = useSelector((store: any) => store.todosReducer);
    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <hr />
        </div>
    );
}