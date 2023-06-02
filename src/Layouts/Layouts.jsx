import { Outlet } from "react-router-dom";
import AllData from "../Components/AllData/AllData";
import Navbar from "../Components/Navbar/Navbar";

const Layouts = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;