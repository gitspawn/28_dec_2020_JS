const frameworks = ["react", "exspres", "vue", "angular", 'blackbone'];
let templRef = document.querySelector('.frameworcs-template').innerHTML
let divRef = document.querySelector('#root');

let templateScript = Handlebars.compile(templRef);
let markup = templateScript(frameworks)
divRef.innerHTML = markup;


/*
    <template class="frameworcs-template">
      <ul>
        {{#each this}}
        <li>{{this}}</li>
        {{/each}}
      </ul.
    </template>

*/