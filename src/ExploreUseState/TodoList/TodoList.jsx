import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  console.log(item);

  const AddToList = () => {
    list.push(item);
    console.log(list);
    console.log(list.length);
    setList([...list]);
  };

  const RemoveItem = (index) => {
    const filterList = list.filter((d) => d.index != index);
    setList(filterList);

    // list.splice(index, 1);
    // setList([...list]);
  };

  return (
    <div>
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Enter item"
      />
      {/* <p>{item}</p>*/}
      <button onClick={AddToList}>Add</button>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((todo, index) => {
              return (
                <tr>
                  <td>{todo}</td>
                  <td>
                    <button
                      onClick={() => {
                        RemoveItem(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>Todo List is empty</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
