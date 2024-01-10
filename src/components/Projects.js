import React from 'react';

function Projects() {
  return (
      <div className="bg-peach p-4">
        <h3 className="text-3xl font-bold mb-4">Projects</h3>
        <p>Here are some of my projects:</p>
        <section className="flex flex-col space-y-4 mt-4">
          {projects.map((project, index) => (
              <div key={index} className="bg-light p-4 rounded-lg shadow-md">
                <p>{`${index + 1}.`} <a href={project.link} className="underline">{project.title}</a></p>
                <p>{project.description}</p>
              </div>
          ))}
        </section>
      </div>
  );
}

const projects = [
  {
    title: 'Skin Care Questionnaire',
    link: 'https://github.com/emsiish/skin-care.git',
    description: 'Questionnaire about skin care made using Angular, TypeScript and Firebase.',
  },
  {
    title: 'Solar System',
    link: 'https://github.com/emsiish/Solar-Sysyem-2021.git',
    description: 'Informative website about the Solar\n' +
        'system made using HTML, CSS, JavaScript\n' +
        'and Bootstrap',
  },
  {
    title: 'To-do list with AWS',
    link: 'https://github.com/emsiish/vot.git',
    description: 'Adding a task and showing all tasks in a list using AWS amd Python.',
  },
  {
    title: 'Sudoku',
    link: 'https://github.com/emsiish/Sudoku-praktika.git',
    description: 'Sudoku console app made using C.',
  },
];

export default Projects;
