import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const fetch = require("node-fetch");

function News() {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Hello From News</h2>
      <h2>news here</h2>
    </div>
  );
}

export default News;
