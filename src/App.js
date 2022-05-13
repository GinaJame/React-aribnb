import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
const data = [
  {rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 0},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 1},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 2},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 3},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 4},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 5},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 6},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 7},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 8},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 9},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 10},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 11},
{rating: 4.98, reviews: 130, country: "United States",place:"Plan The Perfect New York Vacation", price: 102, id: 12}


]
function App() {
  return (
    <>
      <Header/>
      <Body data={data}/>
      <Footer/>
    </>
  );
}

export default App;