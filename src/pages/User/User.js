import "./User.scss";

import UserNav from "../../components/UserComponents/UserNav/UserNav";
import UserHeader from "../../components/UserComponents/UserHeader/UserHeader";
import UserMain from "../../components/UserComponents/UserMain/UserMain";
import Loading from "../Loading/Loading";

import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntryId, setSelectedEntryId] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const API_URL = "http://localhost:8080";

  //GET ALL ENTRIES
  useEffect(() => {
    getAll("entries").then((response) => {
      setEntries(response.data);
    });
  }, []);

  //GET ONE ENTRY
  useEffect(() => {
    if (selectedEntryId) {
      getById(selectedEntryId, "entries").then((response) => {
        setSelectedEntry(response.data);
      });
    }
  }, [selectedEntryId]);

  // GET ALL TEMPLATES
  useEffect(() => {
    getAll("templates").then((response) => {
      setTemplates(response.data);
    });
  }, []);

  // GET TEMPLATE BY ID
  useEffect(() => {
    if (selectedTemplateId) {
      getById(selectedTemplateId, "templates").then((response) => {
        setSelectedTemplate(response.data);
        console.log(response.data);
      });
    }
  }, [selectedTemplateId]);

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
        {entries && templates ? (
          <UserNav
            entries={entries}
            templates={templates}
            setSelectedTemplateId={setSelectedTemplateId}
            setSelectedEntryId={setSelectedEntryId}
          />
        ) : (
          <Loading />
        )}
        <UserMain
          selectedEntry={selectedEntry}
          selectedTemplate={selectedTemplate}
        />
      </section>
    </>
  );
};

export default User;
