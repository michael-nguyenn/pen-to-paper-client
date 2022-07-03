import "./User.scss";

import UserNav from "../../components/UserComponents/UserNav/UserNav";
import UserHeader from "../../components/UserComponents/UserHeader/UserHeader";
import UserMain from "../../components/UserComponents/UserMain/UserMain";
import Loading from "../Loading/Loading";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [entries, setEntries] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const { entryid } = useParams();

  //GET ALL ENTRIES
  useEffect(() => {
    getAll("entries").then((response) => {
      setEntries(response.data);
    });
  }, []);

  //GET ONE ENTRY
  useEffect(() => {
    if (entryid) {
      getById(entryid, "entries").then((response) => {
        setSelectedEntry(response.data);
      });
    }
  }, [entryid]);

  const API_URL = "http://localhost:8080";

  // FUNCTIONS TO GET ALL, AND BY ID
  const getById = (id, path) => {
    return axios.get(`${API_URL}/${path}/${id}`);
  };

  const getAll = async (path) => {
    return axios.get(`${API_URL}/${path}`);
  };

  return (
    <>
      <UserHeader />
      <section className="user">
        {entries ? <UserNav entries={entries} /> : <Loading />}
        <UserMain selectedEntry={selectedEntry} />
      </section>
    </>
  );
};

export default User;
