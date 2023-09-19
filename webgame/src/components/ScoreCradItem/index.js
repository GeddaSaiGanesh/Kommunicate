 
 import './index.css'
 const ScoreCardItem=(props)=>{
    const {playerDetails}=props
    return(
      <tr>
         <td>
            {playerDetails.name} 
         </td>
         <td>
            {playerDetails.gameLevel}
         </td>
         <td>
            {playerDetails.duration}
         </td>
      </tr>
    )
 }

 export default ScoreCardItem