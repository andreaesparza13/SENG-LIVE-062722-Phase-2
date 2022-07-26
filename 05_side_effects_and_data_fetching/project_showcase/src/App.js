import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const onAddProject = (newProject) => {
    setProjects(projects => {
      return [...projects, newProject]
    })
  }

  const onToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  useEffect(() => {
    let url;
    if (selectedPhase && searchQuery) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}&q=${encodeURI(searchQuery)}`
    } else if (selectedPhase) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}`
    } else if (searchQuery) {
      url = `http://localhost:4000/projects?q=${encodeURI(searchQuery)}`
    }
    else {
      url = `http://localhost:4000/projects`
    }
    fetch(url)
    .then((res) => res.json())
    .then((projects) => setProjects(projects));
  }, [selectedPhase, searchQuery]);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm onAddProject={onAddProject}  />
      <ProjectList 
        projects={projects}
        setSelectedPhase={setSelectedPhase}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default App;