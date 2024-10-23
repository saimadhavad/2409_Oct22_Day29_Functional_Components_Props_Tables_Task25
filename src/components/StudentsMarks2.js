import React from 'react'

function StudentsMarks2(props) {
  return (
    <div className="tablewidth"> 
      <table>
            <caption>{props.studentName}'s Mark List</caption>
            <tr>
              <th>Subject</th>
              <th>Max Marks</th>
              <th>Marks Obtained</th>
              <th>Result</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <th>Telugu</th>
              <th rowSpan={6}>100</th>
              <th>{props.telugu}</th>
              <th>{props.result}</th>
              <th>{props.remarks}</th>
            </tr>
            <tr>
              <th>Hindi</th>
              {/* <th>100</th> */}
              <th>{props.hindi}</th>
              <th>{props.result}</th>
              <th>{props.remarks}</th>
            </tr>
            <tr>
              <th>English</th>
              {/* <th>100</th> */}
              <th>{props.english}</th>
              <th>{props.result}</th>
              <th>{props.remarks}</th>
            </tr>
            <tr>
              <th>Maths</th>
              {/* <th>100</th> */}
              <th>{props.maths}</th>
              <th>{props.result}</th>
              <th>{props.remarks}</th>
            </tr>
            <tr>
              <th>Science</th>
              {/* <th>100</th> */}
              <th>{props.science}</th>
              <th>{props.result}</th>
              <th>{props.remarks}</th>
            </tr>
            <tr>
              <th>Social</th>
              {/* <th>100</th> */}
              <th>{props.social}</th>
              <th>{props.result}</th>
              <th>{props.remarks}</th>
            </tr>
            <tr>
              <th>Total</th>
              <th>600</th>
              <th>{props.total}</th>
              <th>{props.result}</th>
              <th>{props.overall}</th>
            </tr>
           
          </table>
    </div>
  )
}

export default StudentsMarks2
