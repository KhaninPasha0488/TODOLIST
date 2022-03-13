// нет
<h3 className={"buttonTitle"}>
<EditableSpan callBack={(title) => editTitleTodolistHendler(props.todolistId, title)}
              title={props.title}/>
<button onClick={onClickHandlerForDeletTodo}>x</button>

</h3>