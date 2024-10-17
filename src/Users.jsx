import { useEffect, useState } from "react"
import User from "./User";

export default function Users() {
        const [Users, setUsers] = useState([]);
        
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
        }, [])
    return (
        <div>
            <h3>Users :{Users.length}</h3>
            {
                Users.map(user => <User User={user}></User>)
            }
        </div>
    )
}