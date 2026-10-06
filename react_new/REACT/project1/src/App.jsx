// import React from 'react'
// import Student1 from './component/student1'
// import Student2 from './component/student2'

// const App = () => {
//   return (
//     <div>
//           <h1>MY STUDENTS RECORDS</h1>
//           <div style={{display:'flex',margin:'20px',gap:'20px',alignItems:'center'}}>
//           <Student1 />
//           <br />
//           <Student2 />
//               <br />
//         </div>
//     </div>
//   )
// }

// export default App

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Home page</h1>;
}

function About() {
  return <h1>About page</h1>;
}

function Contact() {
  return <h1>Contact page</h1>;
}

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;