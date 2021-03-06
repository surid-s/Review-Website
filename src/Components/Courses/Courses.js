import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="courses-container">
                {/* <h1>Our Online Courses</h1> */}
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }

            </div>
            <div className="link">
                <Link to="/allCourse">View More..</Link>
            </div>
        </div>
    );
};

export default Courses;