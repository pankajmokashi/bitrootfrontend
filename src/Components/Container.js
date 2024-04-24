import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function Container() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <div className="loading"></div>}
      <div className="container">
        {!loading && data.map((item) => <Card item={item} key={item.id}/>)}
      </div>
    </>
  );
}

export default Container;
