import { Outlet } from "react-router-dom";


const Root = () => {

      return (
            <div>
                        <h1 className="text-5xl font-bold">Root</h1>
                        <Outlet></Outlet>
            </div>
      );
};

export default Root;