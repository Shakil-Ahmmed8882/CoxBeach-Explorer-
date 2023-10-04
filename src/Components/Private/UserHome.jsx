import Hotels from "./Hotels";
import RandomMap from "./map";
import moment from "moment";

const UserHome = () => {
 
  const currentDate = moment().format("YYYY-MM-DD");
  console.log(currentDate);


  const hotel1 = {
      img:'https://www.famoustoursbd.com/wp-content/uploads/cox-s-bazaar-syed-zakir-hossain-1584366863439.jpg',
      title:'Light bright airy stylish apt & safe peaceful stay',
      description:'if you are looking for vacation coxps bazar is one of the nicest places for you to visitif you are looking for vacation coxps bazar is one of the nicest places for you to visit if you are looking for vacation coxps bazar is one of the nicest places for you to visit'
  }
  return (
    <div className="grid grid-cols-5 px-8">
      <div className="col-span-3">
      <h1 className="text-6xl font-bold ">personal home</h1>
            <p>Date: {currentDate}</p>
            <div>
                  <Hotels
                  hotel={hotel1}
                  ></Hotels>
            </div>
      </div>
      <div className="col-span-2">
        <RandomMap></RandomMap>
      </div>
    </div>
  );
};

export default UserHome;
