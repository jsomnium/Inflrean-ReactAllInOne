import './List.css';
import TodoItem from "./TodoItem";
import { useState, useMemo } from 'react';

const List = ( { todos, onUpdate , onDelete } ) => {
    const [search, setSearch] = useState("");

    const onChaneSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilterdData = () => {
        if (search === ""){
            return todos;
        }

        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    const filteredTodos = getFilterdData();

    const {totalCount, doneCount, notDoneCount} = useMemo ( ()=>{
        // 메모이제이션 하고 싶은 연산을 넣어줌
        console.log("getAnalyzedData 호출!")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        };

    }, [todos]);


    // 배열-> 의존성 배열 : deps
    // deps에 포함된 값이 변경되었을 때만 첫 번째 요소인, 콜백 함수를 다시 실행한다.

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData()

    return <div className="List">
        <h4>Todo List ❤️</h4>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>

        <input 
        value = {search}
        onChange = {onChaneSearch}
        placeholder="검색어를 입력하세요"/>
        <div className='todos_wrapper'>
            {filteredTodos.map((todo)=>{
                    return <TodoItem key={todo.id}
                    {...todo}
                    onUpdate = {onUpdate}
                    onDelete = {onDelete}/>;
                })}
        </div>
    </div>
}

export default List;