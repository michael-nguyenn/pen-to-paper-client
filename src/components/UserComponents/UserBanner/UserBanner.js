import "./UserBanner.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserBanner = () => {
  const [quotes, setQuotes] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then((response) => console.log(response.data));
  // });

  return (
    <section className="user-banner">
      <div className="user-banner__wrapper">
        <blockquote className="user-banner__quote">
          Learning how to be still, to really be still and let life happen —
          that stillness becomes a radiance.
        </blockquote>
      </div>
    </section>
  );
};

export default UserBanner;
