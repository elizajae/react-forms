function Todo({text, onRemoveTodo, index}) {
  return (
    <div>
    {text}
    <button onClick={() => onRemoveTodo(index)}>X</button>
    </div>
  );
}

export default Todo;
