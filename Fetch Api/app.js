document.getElementById('button3').addEventListener('click', getExternal);




// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
          output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}
