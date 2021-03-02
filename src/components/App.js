import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import FoodShow from "./foodshow";

const food = [
  {
    title : "biriyani",
    imageUrl : "https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg",
    cost: '150',
    available:"yes",
    rating: "5/5"

  },
  {
    title : "masala Dosha",
    imageUrl : "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
    cost: '50',
    available:"yes",
    rating: "4/5"

  },
  {
    title : "ice cream",
    imageUrl : "https://hips.hearstapps.com/del.h-cdn.co/assets/17/10/2048x1024/landscape-1489181360-gettyimages-114630929.jpg",
    cost: '40',
    available:"yes",
    rating: "4/5"

  },
  {
    title : "pizza",
    imageUrl : "https://media.istockphoto.com/photos/work-of-my-hands-picture-id1270326723?b=1&k=6&m=1270326723&s=170667a&w=0&h=LgwGuGn_T88M-md6Tf1XOtlIivbi7sduwsflWoniagE=",
    cost: '200',
    available:"yes",
    rating: "5/5"

  }
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = food.filter(person =>
      person.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div>
      <Header/>
    <div className="food" >
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(({title,imageUrl,cost,available,rating}) => (
          <FoodShow  title={title} imageUrl={imageUrl} cost={cost} available={available} rating={rating}/>
        ))}
      </ul>
    </div>
    </div>
  );
}
export default App;