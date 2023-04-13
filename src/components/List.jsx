import React, { useState } from 'react';

const ListItem = ({ id, task, priority, completed, onToggleCompleted, onDelete }) => {
  const handleToggleCompleted = () => {
    onToggleCompleted(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <span>{task}</span>
      <span>{priority}</span>
      <span>{completed ? 'Completed' : 'Incomplete'}</span>
      {!completed && <button onClick={handleToggleCompleted}>Mark Completed</button>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const List = () => {
  const [items, setItems] = useState([
    { id: 1, task: 'Finish Home-Work', priority: 'High', completed: false},
    { id: 2, task: 'Buy groceries', priority: 'Low', completed: false },
    { id: 3, task: 'Clean house', priority: 'Medium', completed: false },
    { id: 4, task: 'Do Exercise', priority: 'Low', completed: false },
    { id: 5, task: 'Check as-Done task', priority: 'Medium', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('Low');
  const [showCompleted, setShowCompleted] = useState(false);

  const handleToggleCompleted = (itemId) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleAddItem = () => {
    if (newTask) {
      const newItem = {
        id: items.length + 1,
        task: newTask,
        priority: newPriority,
        completed: false,
      };
      setItems([...items, newItem]);
      setNewTask('');
      setNewPriority('Low');
    }
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const completedItems = items.filter((item) => item.completed);
  const incompleteItems = items.filter((item) => !item.completed);

  return (
    <div>
      <h2>Incomplete Tasks</h2>
      {incompleteItems.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          task={item.task}
          priority={item.priority}
          completed={item.completed}
          onToggleCompleted={handleToggleCompleted}
          onDelete={handleDelete}
        />
      ))}
      <h2>Add New Task</h2>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={handleAddItem}>Add Task</button>
      </div>
      <button onClick={toggleShowCompleted}>
        {showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks'}
      </button>
      {showCompleted && (
        <div>
          <h2>Completed Tasks</h2>
          {completedItems.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              task={item.task}
              priority={item.priority}
              completed={item.completed}
              onToggleCompleted={handleToggleCompleted}
              onDelete={handleDelete}
            />
          ))}
          <button onClick={() => setItems(incompleteItems)}>Delete Completed Tasks</button>
        </div>
      )}
    </div>
  );
};

export default List;