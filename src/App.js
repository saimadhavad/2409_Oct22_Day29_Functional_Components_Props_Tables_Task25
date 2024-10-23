import logo from './logo.svg';
import './App.css';
import StudentsMarks from './components/StudentsMarks';
import StudentsMarksHeading from './components/StudentsMarksHeading';
import StudentsMarks2 from './components/StudentsMarks2';

function App() {
  return (
    <div className="App">
      
     <div>
     <h2>All Students Marks List (mutiple components)</h2>
        <StudentsMarksHeading></StudentsMarksHeading>
        <StudentsMarks rollno="1" studentName="CSK" maxmarks="100" telugu="95" 
        hindi="85" english="75"  maths="86" science="99" social="80" total="520" remarks="Pass" >
        </StudentsMarks>  
        <StudentsMarks rollno="2" studentName="DC" maxmarks="100" telugu="90" 
        hindi="95" english="82"  maths="100" science="85" social="89" total="541" remarks="Pass" >
        </StudentsMarks>  
        <StudentsMarks rollno="3" studentName="KKR" maxmarks="100" telugu="65" 
        hindi="55" english="45"  maths="33" science="60" social="65" total="323" remarks="Fail" >
        </StudentsMarks>  
        <StudentsMarks rollno="4" studentName="MI" maxmarks="100" telugu="35" 
        hindi="40" english="55"  maths="35" science="40" social="35" total="240" remarks="Fail" >
        </StudentsMarks>  
        <StudentsMarks rollno="5" studentName="RCB" maxmarks="100" telugu="98" 
        hindi="95" english="85"  maths="100" science="95" social="96" total="569" remarks="Pass" >
        </StudentsMarks>  

     </div>
     <div ><h2>Individual Student Marks List (Single Component)</h2></div>
       <div className='studentMarksList'>
          
       <StudentsMarks2 studentName= "CSK" telugu="95" 
        hindi="85" english="75"  maths="86" science="99" social="80" result="Pass" total="520" remarks="Good" overall="Excellent"></StudentsMarks2>
          <StudentsMarks2 studentName= "DC" telugu="90" 
        hindi="95" english="82"  maths="100" science="85" social="89" total="541" result="Pass" remarks="Good" overall="Excellent"></StudentsMarks2>
          <StudentsMarks2 studentName= "KKR" telugu="65" 
        hindi="55" english="45"  maths="33" science="60" social="65" total="323" result="fail" remarks="Average" overall="Poor"></StudentsMarks2>
          <StudentsMarks2 studentName= "MI" telugu="35" 
        hindi="40" english="55"  maths="35" science="40" social="35" total="240" result="fail" remarks="Average" overall="Poor"></StudentsMarks2>
          <StudentsMarks2 studentName= "RCB" telugu="98" 
        hindi="95" english="85"  maths="100" science="95" social="96" total="569" result="Pass" remarks="Good" overall="Excellent"></StudentsMarks2>
       </div>
        
          
          
     
        {/* <div>
        <StudentsMarks2 studentName= "DC"subject="Telugu" maximumMarks="100" marksObtained="95" result="Pass" remarks="Excellent"></StudentsMarks2>
          <StudentsMarks2 studentName= "KKR"subject="Telugu" maximumMarks="100" marksObtained="95" result="Pass" remarks="Excellent"></StudentsMarks2>
          <StudentsMarks2 studentName= "MI"subject="Telugu" maximumMarks="100" marksObtained="95" result="Pass" remarks="Excellent"></StudentsMarks2>
          <StudentsMarks2 studentName= "RCB"subject="Telugu" maximumMarks="100" marksObtained="95" result="Pass" remarks="Excellent"></StudentsMarks2>
        </div> */}
    </div>
  );
}

export default App;
