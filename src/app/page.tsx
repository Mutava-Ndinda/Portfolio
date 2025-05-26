import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import DesignWork from "./components/DesignWork";
import Contact from "./components/Contact";

 export default function Home() {
   return (
     <div>
       <main>
        <Landing/>
        <About/>
        <Projects/>
        <DesignWork/>
        <Contact/>        
       </main>
     </div>
   );
 }