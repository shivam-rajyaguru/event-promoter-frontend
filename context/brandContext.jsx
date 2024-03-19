import { createContext, useContext, useState } from "react";

const BrandContext = createContext("");

const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState([]);

  const [brands, setBrands] = useState({
    brandName: "",
    brandCategory: "",
    brandDescription: "",
    brandWebsite: "",
    brandContact: "",
    brandEmail: "",
    brandAddress: "",
    brandCity: "",
    brandState: "",
    brandZip: "",
    brandSocialFacebook: "",
    brnadSocialInsta: "",
    brandSocialTweet: "",
    brandImage: "",
    brandLogo: "",
  });

  const addBrand = async (
    brandNameParam,
    brandCategoryParam,
    brandDescriptionParam,
    brandWebsiteParam,
    brandContactParam,
    brandEmailParam,
    brandAddressParam,
    brandCityParam,
    brandStateParam,
    brandZipParam,
    brandSocialFacebookParam,
    brnadSocialInstaParam,
    brandSocialTweetParam,
    brandImageParam,
    brandLogoParam
  ) => {
    const brandName = brandNameParam[0];
    const brandCategory = brandCategoryParam[0];
    const brandDescription = brandDescriptionParam[0];
    const brandWebsite = brandWebsiteParam[0];
    const brandContact = brandContactParam[0];
    const brandEmail = brandEmailParam[0];
    const brandAddress = brandAddressParam[0];
    const brandCity = brandCityParam[0];
    const brandState = brandStateParam[0];
    const brandZip = brandZipParam[0];
    const brandSocialFacebook = brandSocialFacebookParam[0];
    const brnadSocialInsta = brnadSocialInstaParam[0];
    const brandSocialTweet = brandSocialTweetParam[0];
    const brandImage = brandImageParam[0];
    const brandLogo = brandLogoParam[0];

    console.log(
      brandName,
      brandCategory,
      brandDescription,
      brandWebsite,
      brandContact,
      brandEmail,
      brandAddress,
      brandCity,
      brandState,
      brandZip,
      brandSocialFacebook,
      brnadSocialInsta,
      brandSocialTweet,
      brandImage,
      brandLogo
    );

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
          brandWebsite: brandWebsite,
          brandContact: brandContact,
          brandEmail: brandEmail,
          brandAddress: brandAddress,
          brandCity: brandCity,
          brandState: brandState,
          brandZip: brandZip,
          brandSocialFacebook: brandSocialFacebook,
          brnadSocialInsta: brnadSocialInsta,
          brandSocialTweet: brandSocialTweet,
          brandImage: brandImage,
          brandLogo: brandLogo,
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
      brandWebsite: brandWebsite,
      brandContact: brandContact,
      brandEmail: brandEmail,
      brandAddress: brandAddress,
      brandCity: brandCity,
      brandState: brandState,
      brandZip: brandZip,
      brandSocialFacebook: brandSocialFacebook,
      brnadSocialInsta: brnadSocialInsta,
      brandSocialTweet: brandSocialTweet,
      brandImage: brandImage,
      brandLogo: brandLogo,
    };

    setBrand(brand.concat(brd));
  };

  // const addBrandSecond = async (
  //   brandWebsiteParam,
  //   brandContactParam,
  //   brandEmailParam,
  //   brandAddressParam,
  //   brandCityParam,
  //   brandStateParam,
  //   brandZipParam,
  //   brandSocialFacebookParam,
  //   brnadSocialInstaParam,
  //   brandSocialTweetParam
  // ) => {
  //   const brandWebsite = brandWebsiteParam[0];
  //   const brandContact = brandContactParam[0];
  //   const brandEmail = brandEmailParam[0];
  //   const brandAddress = brandAddressParam[0];
  //   const brandCity = brandCityParam[0];
  //   const brandState = brandStateParam[0];
  //   const brandZip = brandZipParam[0];
  //   const brandSocialFacebook = brandSocialFacebookParam[0];
  //   const brnadSocialInsta = brnadSocialInstaParam[0];
  //   const brandSocialTweet = brandSocialTweetParam[0];

  //   const response = await fetch(
  //     "http://localhost:2516/api/v1/brand/addBrandSecond",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         brandWebsite: brandWebsite,
  //         brandContact: brandContact,
  //         brandEmail: brandEmail,
  //         brandAddress: brandAddress,
  //         brandCity: brandCity,
  //         brandState: brandState,
  //         brandZip: brandZip,
  //         brandSocialFacebook: brandSocialFacebook,
  //         brnadSocialInsta: brnadSocialInsta,
  //         brandSocialTweet: brandSocialTweet,
  //       }),
  //     }
  //   );

  //   const json = await response.json();
  //   console.log(json);
  //   console.log("first");

  //   const brd = {
  //     brandWebsite: brandWebsite,
  //     brandContact: brandContact,
  //     brandEmail: brandEmail,
  //     brandAddress: brandAddress,
  //     brandCity: brandCity,
  //     brandState: brandState,
  //     brandZip: brandZip,
  //     brandSocialFacebook: brandSocialFacebook,
  //     brnadSocialInsta: brnadSocialInsta,
  //     brandSocialTweet: brandSocialTweet,
  //   };
  //   setBrand(brand.concat(brd));
  // };
  // const [file, setFile] = useState(
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9XjZ8HfDjC2V0oXh1BTyLNm4m0Ez3QCm8A&usqp=CAU"
  // );

  // const [logoFile, setLogoFile] = useState(
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDWPBFO-y48XXDASCybplrUt_CVdc12hTYw&usqp=CAU"
  // );

  const [file, setFile] = useState("");
  const [logoFile, setLogoFile] = useState("");

  return (
    <BrandContext.Provider
      value={{
        addBrand,
        brands,
        setBrands,
        file,
        setFile,
        logoFile,
        setLogoFile,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

const useBrandGlobalContext = () => {
  return useContext(BrandContext);
};

export { BrandContext, BrandProvider, useBrandGlobalContext };
