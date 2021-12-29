import React, { Component } from 'react';
import axios from 'axios';
import './todo.css';

export default class ToDo extends Component {

    state = {
        todos: []
    }
    

    componentDidMount() {
        axios.get(`http://localhost:3001/todos`)
          .then(res => {
            const todos = res.data;
            console.log(todos);
            this.setState({ todos });
          })
      }
    render() {
      console.log(this.state.todos);
    //   let list = this.state.todos.map( item =>
    //                <li key={item.id}>{item.task}</li>
    //              );
  
      return(
        <div>
        <h2>タスクの一覧</h2>
        <a href="/create-page">タスクを追加</a>
        <table border="1">
            <tr>
                <th>タスクの内容</th>
                <th>タスクの期限</th>
                <th>タスクのstatus</th>
                <th colspan="2">操作</th>
            </tr>
            { this.state.todos.map(
                item => 
            
            <tr>
                <td>{item.task}</td>
                <td>{item.task_limited_at}</td>
                
                <td><a href={'/edit-page/' + item.id}>編集</a></td>
                <td><a href={'/delete-page/' + item.id}>削除</a></td>
            </tr>    
            )    
            }    
            
            
        </table>
        </div>  
        
        
      );
    }
}
  