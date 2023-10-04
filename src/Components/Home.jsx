import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Home</h1>
      <Link to='/userHome' className="btn btn-primary">See Hotel</Link>
    </div>
  );
};

export default Home;
