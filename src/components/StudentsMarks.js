import React from 'react'

function StudentsMarks(props) {
  return (
    <div>
    <table>
            <tr>
            <th rowSpan={2} className='rollNO'>{props.rollno}</th>
            <th rowSpan={2} className='studentName'>{props.studentName}</th>
            <th rowSpan={2} className='maxMarks'>{props.maxmarks}</th>
            
            <td className='studentsMarks'>{props.telugu}</td>
            <td className='studentsMarks'>{props.hindi}</td>
            <td className='studentsMarks'>{props.english}</td>
            <td className='studentsMarks'>{props.maths}</td>
            <td className='studentsMarks'>{props.science}</td>
            <td className='studentsMarks'>{props.social}</td>
           
            {/* <th colSpan={6}>Marks Obtained</th> */}
            <th rowSpan={2} className='studentTotal'>{props.total}</th>
            <th rowSpan={2} className='studentRemarks'>{props.remarks}</th>
            </tr>
        </table>    
        
    </div>
  )
}

export default StudentsMarks
