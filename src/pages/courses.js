import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CourseListing from "../components/courses/course-listing"
import { Link } from "gatsby"
import COURSE_LIST from "../data/autogenerated_course_info.json"
import courseCategorizer from "../utils/course-categorizer"

const categorizedCourses = courseCategorizer(COURSE_LIST.courses)

// TODO DESIGN fix this hr, make consitent titles
const CoursesPage = () => (
  <Layout>
    <SEO title="Pitt CS Course Exploration" />
    <h1>Courses</h1>
    <p>
      If you are new to the CS classes,
      <span className="ml-2 bg-yellow-300 dark:bg-yellow-800 px-2 py-1">
        we suggest viewing our{" "}
        <Link to="/academics/scheduling">scheduling guide</Link>!
      </span>
    </p>
    <CourseListing
      courseList={COURSE_LIST}
      courseCategories={categorizedCourses}
    />
  </Layout>
)

export default CoursesPage
