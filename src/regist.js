import React, { Component } from 'react';
// import axios from 'axios';

export default class Regist extends Component {

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        
        return(
            <div>
                <h2>タスクを追加</h2>
                <form method="POST" action="/create">
                    @csrf
                    <p>
                        タスク：<input type="text" name="task" />
                    </p>
                    <p>
                        タスクの期限：<input type="text" name="task_limited_at" />
                    </p>
                    <input type="submit" name="create" value="追加" />
                </form>
                <a href="/">戻る</a>
            </div>
          
          
        );
      }
}