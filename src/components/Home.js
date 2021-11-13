// rcc -> create class based component
import React from "react";
import components from "./osu.png";
import components1 from "./osu_cse.jpg";

function Home() {
  return (
    <div>
      <img src={components} alt="OSU" style={{width:300, height:200, top:20, left:15}} ></img>
      <img src={components1} alt="OSU_CSE" style={{width:400, height:125, top:70, right:15, position:'absolute'}}></img>

      <h1>General Statement</h1>
      <p>Ohio State’s Department of Computer Science 
        and Engineering has excelled in both research 
        and education since 1968. Ranked among the top 
        computer science departments at public institutions 
        in the United States by the National Research 
        Council and by U.S. News & World Report, the 
        department provides an outstanding educational 
        experience to 900 undergraduate and 300 graduate 
        students from across the globe.
        The mission of the Computer Science and Engineering 
        Graduate Program is to develop researchers, educators 
        and practicing professionals with advanced skills in 
        computing. Students can pursue a master’s degree, a 
        doctoral degree or both.
        </p> 

        <br/>

        <h1>Mission Statement</h1>
        <p>The Department of Computer Science and Engineering 
          will impact the information age as a national leader 
          in computing research and education. We will prepare 
          computing graduates who are highly sought after, 
          productive, and well-respected for their work, and 
          who contribute to new developments in computing. We 
          will give students in other disciplines an appropriate 
          foundation in computing for their education, research, 
          and experiences after graduation, consistent with 
          computing's increasingly fundamental role in society. 
          In our areas of research focus, we will contribute key 
          ideas to the development of the computing basis of the 
          information age, advancing the state of the art for the 
          benefit of society, the State of Ohio, and The Ohio State 
          University. We will work with key academic partners within 
          and outside of OSU, and with key industrial partners, in 
          pursuit of our research and educational endeavors.
        </p>

        
        
    </div>
  );
}

export default Home;
