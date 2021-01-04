import { useState, useEffect } from "react";
import { stationService } from "../../services/stationService";
import { userService } from "../../services/userService";
import "./Home.scss";

const Home = (props) => {
    const [users, setUsers] = useState([]);
    const [stations, setStations] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const res = await userService.login();
            setUsers(res);
        }
        getUsers();
    }, []);

    useEffect(() => {
        async function getStations() {
            const res = await stationService.query();
            setStations(res);
        }
        getStations();
    }, []);

    return (
        <div>
            <h1>MY MUSIC</h1>
            <span>Hello {users.fullName}</span>
            <span>station: {stations.name}</span>
        </div>
    );
};

export default Home;
