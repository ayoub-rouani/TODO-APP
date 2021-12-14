import { useEffect, useState } from "react";
import Axios from "axios";

import TodoList from "../components/TodoList";

const LIST_DATA = [
  {
    id: "1",
    type: "0",
    title: "Todo",
  },
];

function Home() {
  const [todoData, setTodoData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get_all_todo").then((result) => {
      setisLoading(false);
      setTodoData(result.data);
    });

    if (isLoading) {
      return (
        <>
          <p>Loading Data</p>
        </>
      );
    }
  }, [isLoading]);

  return (
    <>
      {LIST_DATA.map((dt) => {
        return (
          <TodoList key={dt.id} todo_data={todoData} list_props={dt}></TodoList>
        );
      })}
    </>
  );
}

export default Home;
