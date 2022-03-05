function copy() {
  const email = 'anhtuan.gamedev@gmail.com';
  navigator.clipboard.writeText(email);
  let alert = document.querySelector('#alert');
  alert.innerHTML = 'Copied!';
}

// Temporary use this file to save something I haven't used yet

//  color: #2e3e61;

/* 
  background-color: #060612;
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.project, .card {
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.project {
  margin: 1rem;
  padding: 1rem;
  width: 300px;
}
.banner {
  width: 300px;
}
.card {
  margin: 0.5rem;
  padding: 1rem;
  width: 300px;
}
*/
