import React from "react";
import POPOSSPace from "./POPOSSpace";

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSPace
        name="50 California Street"
        address = "50 California St."
        image = "50-california-st.jpg" 
      />
      <POPOSSPace 
        name ="100 Pine Street"
        address="100 Pine St."
        image = "100-pine.jpg"
      />
      <POPOSSPace 
        name= "Garden Terrace"
        address = "100 California St."
        image = "garden-terrace-at-150-california.jpg"/>
      <POPOSSPace />
      <POPOSSPace />
      <POPOSSPace />
    </div>
  );
}

export default POPOSList;