import { createContext, useContext, useState } from "react";

const BrandContext = createContext("");

const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState([]);

  const [brands, setBrands] = useState({
    brandName: "",
    brandCategory: "",
    brandDescription: "",
  });

  const addBrand = async (
    brandNameParam,
    brandCategoryParam,
    brandDescriptionParam
  ) => {
    const brandName = brandNameParam[0];
    const brandCategory = brandCategoryParam[0];
    const brandDescription = brandDescriptionParam[0];
    console.log(brandName, brandCategory, brandDescription);

    const response = await fetch(
      "http://localhost:2516/api/v1/brand/addBrand",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          brandName: brandName,
          brandCategory: brandCategory,
          brandDescription: brandDescription,
        }),
      }
    );

    const json = await response.json();
    console.log(json);
    console.log("first");

    const brd = {
      brandName: brandName,
      brandCategory: brandCategory,
      brandDescription: brandDescription,
    };
    setBrand(brand.concat(brd));
  };
  return (
    <BrandContext.Provider value={{ addBrand, brands, setBrands }}>
      {children}
    </BrandContext.Provider>
  );
};

const useBrandGlobalContext = () => {
  return useContext(BrandContext);
};

export { BrandContext, BrandProvider, useBrandGlobalContext };
