import { useState, useEffect } from "react";

import {BASE_URL_TASK} from "../../data/constans.ts"
import style from "./Dashboard.module.scss"

type PropsTask = {
    _id: any;
    task: string;
    completed: boolean;
    pinned: boolean;
    createdAt: any;
};
const Dashboard = () => {
    const [tasks, setTasks] = useState<PropsTask[]>([]);

    const getTasks = () => {
        fetch(`${BASE_URL_TASK}`)
            .then((res) => res.json())
            .then((data) => setTasks(data));
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>
            <h1 className={style.title}>List of tasks</h1>
            {tasks.length > 0 && tasks.map((item: PropsTask) => (
                <div key={item._id}>
                    <h2>{item.task}</h2>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
