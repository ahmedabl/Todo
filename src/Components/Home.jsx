import {useState} from 'react'

const Home = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleClick = () => {
        if (inputValue === "") {

        }
       setTodos([...todos, inputValue])
       setInputValue("")
    }

    const handleInputChange = (ev) => {
        setInputValue(ev.target.value)
    }

    return (
        <div>
        <h1>Todo App</h1>
        <div>
            <div>
            {inputValue === "" ? 
            <Alert  variant='danger'>Please Type Something</Alert>
             :
             <></> 
            }
            </div>
          <input type="text" value={inputValue} onChange={handleInputChange}  />
          <Button disabled={inputValue === ''} variant='secondary' size="sm" onClick={handleClick}>Add Todo</Button>
          <div>
          {todos.map((singleTodo) => {
            return <p>{singleTodo}</p>
          })}
          </div>
        </div>
        </div>
    )
}
  export default Home
  