import "./ProjectsCard.css";
import Projects from "../data/projects";
import { useState } from "react";
import Pagination from "../pagination/Pagination";
import Preparing from "../preparing/Preparing";

function ProjectsCard({
  image,
  title,
  description,
  figmaLink,
  githubLink,
  moreLink,
}) {
  return (
    <article className="card">
      <img width={300} src={image} alt={title} />
      <div style={{ width: "300px" }} className="box">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="flex icons">
          <div className="flex logos">
            <a href={figmaLink} className="icon figmaLink">
              <ion-icon name="logo-figma" />
            </a>
            <a href={githubLink} className="icon githubLink">
              <ion-icon name="logo-github" />
            </a>
          </div>
          <a href={moreLink} className="moreLink flex">
            more
            <ion-icon
              style={{ alignSelf: "auto" }}
              name="arrow-forward-outline"
            ></ion-icon>{" "}
          </a>
        </div>
      </div>
    </article>
  );
}

const ProjectList = ({flag}) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(9);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;

  const typesFound = Projects.filter(post => post.flag.includes(flag));
  const postsToShow = typesFound.slice(firstPost, lastPost);

  return (
    <section className="flex-cul">
      <section className= {`projects flex ${postsToShow.length <= 0 ? "cooking" : ""}`}>
        {postsToShow.length > 0 ? postsToShow.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        )) : <Preparing />}
      </section>
      <Pagination className="pages-num"
        totalPages={typesFound.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrentPage}
      />
    </section>
  );
};

export default ProjectList;
