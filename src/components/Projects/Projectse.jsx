import React from 'react'
import styled from 'styled-components'
import ProjectCard from "./ProjectCard"
import amazonimg from "../../assets/amazon-clone.png"
import groceryimg from "../../assets/grocery.png"
import gitimg from "../../assets/GitHub.png"
const Projects = () => {

  const projects=[
    {key:1,image:amazonimg,title:"Amazon clone",
    desc:"NodeJs, Express, Mongoose, React,BootStrap",
   },
    {key:2,image:groceryimg,title:"GroceryHub",desc:"NodeJs, Express, Mongoose, React,Tailwind CSS"},
    {key:3,image:gitimg,title:"BugHub",desc:"Python,GitHub API,Jupyter,StackExchange API"}

  ]
  return (
    <Container id="proo">
      <Heading>
      <h2>Projects</h2>
      </Heading>
    <ProjectsGrid>
      {
        projects.map((project)=>(
          // <a href={project.link}>
          <ProjectCard key={project.key} link={project.link} image={project.image} title={project.title} desc={project.desc}></ProjectCard>
          // </a>
        ))
      }
    </ProjectsGrid>
    </Container>
  )
}

const Heading=styled.div`
padding:0 0 0 8rem ;

h2{
  font-size: 24px;
}
`;
const Container=styled.div`
width: 100%;
margin-top: 20px;
color: white;
/* text-align: center; */
`;

const ProjectsGrid=styled.div`
width: 100%;
display: grid;
justify-content: center;

grid-auto-rows: 300px;
padding-left:8.8rem;
padding-top:2.5rem;
padding-bottom:2.5rem;

@media only screen and (min-width:1024px){
  grid-template-columns: repeat(4,minmax(0,1fr));
}
@media only screen and (min-width:768px) and (max-width:1024px){
    grid-template-columns: repeat(3,minmax(0,1fr));
}

@media only screen and (max-width:767px){
  grid-template-columns: repeat(2,minmax(0,1fr));
}

@media only screen and (max-width:576px) {
    grid-template-columns: repeat(1,minmax(0,1fr));
    grid-gap: 1.25rem;
}
grid-gap: 20px;
`;

export default Projects