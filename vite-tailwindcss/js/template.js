   
   /* 
         copy markup here 
   */
   
   function movieTemplate ({movie_title, run_time, box_office, poster, director, lead}){
    

    const template = `
    <header>
      <h2>${movie_title}</h2>
    </header>
    <div class="profile">
      <img src="${poster}" alt="${movie_title} poster" />

      <div class="info">
        <ul>
          <li>Director: ${director}</li>
          <li>Lead Actor/Actress: ${lead}</li>
          <li>Run Time: ${run_time}</li>
          <li>Box Office: ${box_office}</li>
        </ul>
      </div>
    </div>
    `
   }

   export {movieTemplate}