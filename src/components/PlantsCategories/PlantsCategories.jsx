import {NavLink} from "react-router-dom";

const PlantsCategories = () => {

    return (
        <>
        <div>
                <ul className="nav-categories block fixed">
                    <NavLink to="/categories" className=" menuItems mr-7 md:mr-8 hover:underline  decoration-gray-700 cursor-pointer"><p>PlantsA</p></NavLink>
                    <NavLink to="/categories" className=" menuItems mr-7 md:mr-8 hover:underline  decoration-gray-700 cursor-pointer"><p>PlantsB</p></NavLink>
                </ul>
        </div>
        </>
    );
}

export default PlantsCategories;
