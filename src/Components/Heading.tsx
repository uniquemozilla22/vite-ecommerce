import React from "react";
import { ContentContext } from "../App";
const Heading = () => {
  const data = React.useContext(ContentContext);

  console.log(data);

  return <h1>{data.heading}</h1>;
};

export default Heading;
