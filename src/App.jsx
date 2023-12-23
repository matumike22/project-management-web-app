import { useState } from 'react';
import EmptyContainer from './components/EmptyContainer';
import SideBar from './components/SideBar';
import AddProject from './components/AddProject';
import Project from './components/Project';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [projects, setProjects] = useState({
    selectedProjectid: undefined,
    projects: [],
  });

  const [initialProjectData, setInitialProjectData] = useState({});

  function handleStartAdd(isEdit, initialData) {
    setProjects((prevPro) => {
      return {
        ...prevPro,
        selectedProjectid: isEdit === true ? 'editing' : null,
      };
    });

    if (initialData) {
      console.log(initialData);
      setInitialProjectData(initialData);
    }
  }

  function handleCancel() {
    setProjects((prevPro) => {
      return {
        ...prevPro,
        selectedProjectid: undefined,
      };
    });
  }

  function handleAddProject(projectData, isEdit) {
    setProjects((prevProjects) => {
      if (isEdit === true) {
        const projectId = projectData.id;
        return {
          ...prevProjects,
          selectedProjectid: undefined,
          projects: prevProjects.projects.map((project) => {
            if (project.id === projectId) {
              return { ...project, ...projectData };
            }
            return project;
          }),
        };
      } else {
        const projectId = uuidv4();
        return {
          ...prevProjects,
          selectedProjectid: undefined,
          projects: [
            ...prevProjects.projects,
            {
              ...projectData,
              id: projectId,
            },
          ],
        };
      }
    });
    console.log(projects);
  }

  function handleDeleteProject(projectId) {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectid: undefined,
        projects: prevProjects.projects.filter(
          (project) => project.id !== projectId
        ),
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectid: projectId,
      };
    });
  }

  let view;
  if (projects.selectedProjectid === undefined) {
    view = <EmptyContainer onAdd={handleStartAdd} />;
  } else if (projects.selectedProjectid === null) {
    view = (
      <AddProject
        onAddProject={handleAddProject}
        initialData={{
          id: '',
          title: '',
          description: '',
          date: '',
          tasks: [],
        }}
        isEdit={false}
        onCancelAdd={handleCancel}
      />
    );
  } else if (projects.selectedProjectid === 'editing') {
    view = (
      <AddProject
        onAddProject={handleAddProject}
        initialData={initialProjectData}
        isEdit={true}
        onCancelAdd={handleCancel}
      />
    );
  } else {
    view = (
      <Project
        onEdit={handleStartAdd}
        onAddTask={handleAddTask}
        onDeleteProject={handleDeleteProject}
        onDeleteTask={handleDeleteTask}
        projectData={projects.projects.find((project) => {
          return projects.selectedProjectid === project.id;
        })}
      />
    );
  }

  function handleAddTask(projectId, task) {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        projects: prevProjects.projects.map((project) => {
          if (project.id === projectId) {
            return { ...project, tasks: [...project.tasks, task] };
          }
          return project;
        }),
      };
    });
  }

  function handleDeleteTask(projectId, task) {
    setProjects((prevProjects) => {
      return {
        ...prevProjects,
        projects: prevProjects.projects.map((project) => {
          if (project.id === projectId) {
            return {
              ...project,
              tasks: project.tasks.filter((taskItem) => taskItem !== task),
            };
          }
          return project;
        }),
      };
    });
  }

  return (
    <>
      <div className='flex items-start'>
        <SideBar
          onAdd={handleStartAdd}
          onSelectProject={handleSelectProject}
          projects={projects.projects}
        />
        <div
          id='view'
          className='flex flex-col flex-grow h-screen w-max justify-center items-center align-top p-10'
        >
          {view}
        </div>
      </div>
    </>
  );
}

export default App;
