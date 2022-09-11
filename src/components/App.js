import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [colors,set_colors_after_mood_change]= useState({
    x:245, y:241, z:0
  })
  const handleChange=(mood_color)=>{
    if(mood_color.target.value === "for_happy")
    {
      set_colors_after_mood_change({...colors,x:238,y:241,z:0});
    } 
    else if(mood_color.target.value === "for_sad")
    {
      set_colors_after_mood_change({...colors,x:19,y:0,z:164});
    }
    else if(mood_color.target.value === "for_sleepy")
    {
      set_colors_after_mood_change({...colors,x:35,y:177,z:0});
    }
    else if(mood_color.target.value === "for_excited")
    {
      set_colors_after_mood_change({...colors,x:255,y:0,z:66});
    }
  }
  return (
    <div id="main">
    <select onChange={handleChange}>
      <option value="for_happy">Happy</option>
      <option value="for_sad">Sad</option>
      <option value="for_sleepy">Sleepy</option>
      <option value="for_excited">Excited</option>
    </select>
    <div id="mood-indicator" style={{backgroundColor:`rgb(${colors.x}, ${colors.y},${colors.z})`}}></div>
  </div>
  );
}
export default App;