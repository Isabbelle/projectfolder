import React, { useEffect, useState } from "react";
import axios from "./axios"


function App() {
  const [company, setCompany] = useState();
  const fetchdata = async () => {
    const res = await axios.get("/comp")
    setCompany(res.data)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  console.log(company)

  const [categories, setCategories] = useState();
  const fetchData = async () => {
    const result = await axios.get("/categories")
    setCategories(result.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(categories);


  return (
    <div className="List">
      {company.map(comp => (
        <p className="title">{comp.title}</p>
      ))}
    </div>

  );
}

export default App;
