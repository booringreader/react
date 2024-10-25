import User from "./User";
import UserClass from "./UserClass";

const About = () => {
   return (
      <div>
         <h1>react routing configuration test</h1>
         <div className="users">
            <ul>
               <li><UserClass name={"@boorignreader (UserClass)"} /></li>
            </ul>

         </div>
      </div>
   )
}

export default About;