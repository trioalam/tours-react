import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, isLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const remove = (id) => {
    let a = tours.filter((b) => b.id !== id);
    setTours(a);
  };

  const getTours = async () => {
    try {
      isLoading(true);
      const response = await fetch(url);
      const tour = await response.json();
      isLoading(false);
      console.log(tour);
      setTours(tour);
    } catch (error) {
      isLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h3>No tours Left</h3>
        <button className="btn" onClick={getTours}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <main>
        <Tours tour={tours} remove={remove} />
      </main>
    </>
  );
}

export default App;
