import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Fetch() {
    const [info, setInfo] = useState([])
    const [user, setUser] = useState([])



    const FetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setInfo(res.data)
                setUser(res.data)
            }
            )

            .catch((err) => console.log(err))

    }
    const searchData = (evt) => {

        setUser(info.filter(item => item.name.toLowerCase().includes(evt.target.value)))
    }

    return (
        <div className="bg-light ">
            <div className="bg-white shadow border">
                <h6>question no. 6 and 7</h6>
                <h1 className="text-center">Fetch Api and Search Filter</h1>

                <button className="m-3" onClick={FetchData}>Fetch user data</button>
                <input type="text" className="m-3" placeholder="search here" onChange={(e) => searchData(e)} />
                <table cellPadding="10" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((list, i) => (
                            <tr key={i}>
                                <td>{list.id}</td>
                                <td>{list.name}</td>
                                <td>{list.email}</td>
                                <td>{list.phone}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>


        </div>
    )

}