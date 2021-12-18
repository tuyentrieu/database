
const api_url = 
"http://localhost:8000/api/todos";


function getapi() {
    var Promise = fetch(api_url);
  
    Promise
      .then(function(response) {
          if(!response.ok) {
             throw new Error("HTTP error, status = " + response.status);
          }
          
          var myJSON_promise = response.json();
  
          
          return myJSON_promise;
      })
      .then(function(myJSON) {
          show(myJSON);
          console.log(myJSON);
      })
      .catch(function(error)  {
          console.log(error);
      });
}
// Calling that async function
getapi();

function show(data) {
let tab = 
  `<tr>
    <th>id</th>
    <th>task</th>
    <th>createAt</th>
    <th>updatedAt</th>
   </tr>`;

// Loop to access all rows 
for (let r of data) {
  tab += `<tr> 
<td>${r._id}&nbsp&nbsp&nbsp </td>
<td>${r.task}&nbsp&nbsp&nbsp</td>
<td>${r.createdAt}&nbsp&nbsp&nbsp</td> 
<td>${r.updatedAt}&nbsp&nbsp&nbsp</td>          
</tr>`;
}

document.getElementById("employee").innerHTML = tab;
}

function create(){
    data = document.getElementById('create').value;
    const new_data = {"task":data};

    fetch('http://localhost:8000/api/todo/create', {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(new_data),
        })
        .then(response => response.json())
        .then(new_data => {
        console.log('Success:', new_data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}