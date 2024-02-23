import { createContext, useContext, useState } from "react";

const InfluenceContext = createContext("");

const InfluenceProvider = ({ children }) => {
  const [influence, setInfluence] = useState([]);
  const getAllData = async () => {
    try {
      const response = await fetch("http://localhost:2516/api/v1/influence", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      console.log(json.influencer);
      setInfluence(json.influencer);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchData = async (name) => {
    try {
      const response = await fetch(
        `http://localhost:2516/api/v1/influence?name=${name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      console.log(json.influencer);
      setInfluence(json.influencer);
    } catch (error) {
      console.log(error);
    }
  };

  const addInfluence = async (
    name,
    username,
    email,
    country,
    totalsubmission,
    lastsubmission
  ) => {
    console.log("Adding influence");
    const response = await fetch(
      "http://localhost:2516/api/v1/influence/addInfluence",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          username: username,
          email: email,
          country: country,
          totalsubmission: totalsubmission,
          lastsubmission: lastsubmission,
        }),
      }
    );
    const json = await response.json();
    console.log("hii");
    console.log(json);
    const inf = {
      name: name,
      username: username,
      email: email,
      country: country,
      totalsubmission: totalsubmission,
      lastsubmission: lastsubmission,
    };
    setInfluence(influence.concat(inf));
  };
  return (
    <InfluenceContext.Provider
      value={{ getAllData, influence, addInfluence, getSearchData }}
    >
      {children}
    </InfluenceContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(InfluenceContext);
};

export { InfluenceContext, InfluenceProvider, useGlobalContext };
