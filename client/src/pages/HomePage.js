import Header from "../components/Header";
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <AddClientModal />
        <AddProjectModal />
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
  );
};

export default HomePage;
