import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const [tomaDatos, setTomaDatos] = useState("");

  const [tarea, setTarea] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog",
  ]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tomaDatos.trim() !== "") {
      setTarea([...tarea, tomaDatos.trim()]);
      setTomaDatos("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTarea(tarea.filter((_, index) => index !== indexToDelete));
  };

  return (
      <div className="container d-flex flex-column align-items-center mt-5"
      style={{ maxWidth: "550px" }}>
        
    <div className="card d-flex flex-column align-items-center mt-5 px-3 pb-3"
      style={{ maxWidth: "500px" }}
    >

      <h1 className="card-body display-1 text-danger text-opacity-20 fw-light m-0">
        ToDos
      </h1>

      <div className="card w-100 shadow-sm border-1 rounded-1">

        <div className="border-bottom">
          <input
            type="text"
            className="form-control form-control-lg border-0 py-3 ps-4 fs-3 fw-light text-secondary"
            placeholder="What needs to be done?"
            style={{ fontStyle: "italic", boxShadow: "none" }}
            value={tomaDatos}
            onChange={(e) => setTomaDatos(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>


        <ul className="list-group list-group-flush">
          {tarea.length === 0 ? (
            <li className="list-group-item py-3 ps-4 text-muted fst-italic fs-5 fw-light">
              Acabaste las tareas, añadir nuevas tareas
            </li>
          ) : (
            tarea.map((task, index) => (
              <TodoItem
                key={index}
                task={task}
                onDelete={() => deleteTask(index)}
              />
            ))
          )}
        </ul>
        
        <div className="card-footer bg-white text-muted py-2 ps-3 border-top-0 fs-6 fw-light shadow-sm">
          {tarea.length} {tarea.length === 1 ? "item" : "items"} left
        </div>
      </div>

      <style>{`
        .form-control::placeholder { color: #e6e6e6 !important; }
      `}</style>
    </div>
    </div>
  );
};

export default TodoList;
