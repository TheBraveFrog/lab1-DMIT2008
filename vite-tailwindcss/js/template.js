   function movieTemplate ({movie_title, run_time, box_office, poster, director, lead}){

    const template = `
    <div class="max-w-sm rounded overflow-hidden shadow-xl p-4 inline-block">
    <header>
    <img class="object-cover" src="${poster} alt="${movie_title} poster"
    <h2>${movie_title}</h2>
  </header>
  <div class="profile">

      <ul>
        <li>Director: ${director}</li>
        <li>Lead Actor/Actress: ${lead}</li>
        <li>Run Time: ${run_time}</li>
        <li>Box Office: ${box_office}</li>
      </ul>
  </div>
</div>

    `

    const elm = document.createRange().createContextualFragment(template).children[0]

    return elm

   }

   export {movieTemplate}