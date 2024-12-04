import styles from "./postList.module.css"
import Post from "./post";

import { useLoaderData } from "react-router-dom";


const PostList = ()=>{

  const posts = useLoaderData();

  return(
     <>
      <section className={styles["section"]}>  
          
        {posts.length === 0 && (
          
          <div style={{ textAlign: "center", padding: "2rem 0", fontSize: "1.2rem" }}>
            <p style={{color: "black"}}>No posts found.</p>
          </div>    
        )}
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} />
      ))}
      </section>
      

      {/* These posts are hardcoded for now */
      /* In the future, we can fetch them from a database or API 
      <Post title="Getting Started with React" content="React is a powerful JavaScript library for building user interfaces. Learn the basics of components, props, and state management."/>
      <Post title="CSS Modules in React" content="CSS Modules provide local scope for CSS classes, making it easier to style components without conflicts. Perfect for large applications!"/>
      <Post title="Modern JavaScript Features" content="Explore the latest JavaScript features like arrow functions, destructuring, and spread operators that make coding more efficient."/>
      <Post title="Web Development Best Practices" content="Discover essential practices for building maintainable, scalable, and performant web applications."/>
      <Post title="Responsive Design Tips" content="Learn how to create websites that look great on all devices using media queries, flexbox, and CSS Grid."/>
      <Post title="State Management in React" content="Compare different state management solutions like Context API, Redux, and Zustand for your React applications."/>
      <Post title="React Hooks Explained" content="Deep dive into React Hooks like useState, useEffect, and custom hooks for better component logic organization."/>
      <Post title="Web Performance Optimization" content="Tips and tricks to make your web applications faster and more efficient for better user experience."/>
      <Post title="Frontend Testing Strategies" content="Learn about different testing approaches including unit tests, integration tests, and end-to-end testing."/>
      <Post title="Modern CSS Techniques" content="Explore modern CSS features like CSS Grid, Custom Properties, and CSS animations for better designs."/>
      <Post title="TypeScript with React" content="Add type safety to your React applications with TypeScript to catch errors early and improve development experience."/>
      <Post title="Next.js Fundamentals" content="Get started with Next.js, the React framework for production that makes building full-stack web applications a breeze."/>
      */}

     </>
      
  
  )
}

export default PostList;