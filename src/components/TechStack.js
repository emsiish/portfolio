import React from 'react';
import CPhoto from '../assets/c.png';
import CPlusPlusPhoto from '../assets/cpp.png';
import JavaPhoto from '../assets/java.png';
import PythonPhoto from '../assets/python.png';
import JavaScriptPhoto from '../assets/javascript.png';
import HTMLPhoto from '../assets/html.png';
import CSSPhoto from '../assets/css.png';
import MySQLPhoto from '../assets/mysql.png';
import FlaskPhoto from '../assets/flask.png';

function TechStack() {
    const rows = chunkArray(techItems, 3);

    return (
        <div className="bg-peach p-4">
            <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
            {rows.map((row, rowIndex) => (
                <section key={rowIndex} className="flex flex-wrap justify-center mb-8">
                    {row.map((item) => (
                        <div key={item.title} className="flex flex-col items-center p-4 w-80 mx-4 my-4 bg-light rounded-lg shadow-md">
                            <img src={item.photo} alt={item.title} className="w-full h-full object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </section>
            ))}
        </div>
    );
}

function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}


const techItems = [
    {
        title: 'C',
        photo: CPhoto,
        description: 'The first language I learned. I have been studying it since the 8th grade.',
    },
    {
        title: 'C++',
        photo: CPlusPlusPhoto,
        description: 'I started learning C++ in the second term of 9th grade.',
    },
    {
        title: 'Java',
        photo: JavaPhoto,
        description: 'One of my favorite languages for backend development. I have been studying it since the 10th grade.',
    },
    {
        title: 'Python',
        photo: PythonPhoto,
        description: 'Together with Java, I really enjoy coding in Python. I have been studying it since the 9th grade.',
    },
    {
        title: 'JavaScript',
        photo: JavaScriptPhoto,
        description: 'One of the first languages I became learning outside of school. I started learning it in the 8th grade.',
    },
    {
        title: 'HTML',
        photo: HTMLPhoto,
        description: 'Together with CSS and JavaScript, I have been studying HTML since the 8th grade.',
    },
    {
        title: 'CSS',
        photo: CSSPhoto,
        description: 'One of the first things I learned that got me into frontend development. I started learning it in the 8th grade.',
    },
    {
        title: 'MySQL',
        photo: MySQLPhoto,
        description: 'Began learning it at my internship at the end of 9th grade. Found it very interesting and useful.',
    },
    {
        title: 'Flask Web Framework',
        photo: FlaskPhoto,
        description: 'Studied it together with MySQL and I have been using it a lot since then, especially this year',
    },
];

export default TechStack;
