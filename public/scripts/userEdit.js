async function updateProfile(userId) {
    const formData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      email: document.getElementById('email').value,
    };

  const response = await fetch(`http://localhost:5000/api/userEdit/${userId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
if(!response.ok){
  const errorData = await response.json()
    alert(errorData);
}else{
  alert("updated successfully...!");
}
}

///// delete user

async function deleteUser(userId){
  const response = await fetch(`http://localhost:5000/api/deleteUser/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if(!response.ok){
    const errorData = await response.json()
      alert(errorData);
  }else{
    alert("deleted successfully...!");
    // window.location.reload();
  }
}

//// edit user profile

async function editProfile(userId){
  const avatar = document.getElementById("file");
  const formData = new FormData();
  formData.append('username',document.getElementById("username").value);
  formData.append('password',document.getElementById("password").value);
  formData.append('email',document.getElementById("email").value);
  if (avatar.files.length > 0) {
    formData.append('avatar', avatar.files[0],avatar.files[0].name);
  }
  const response = await fetch(`http://localhost:5000/editProfile/${userId}`,{
    method:'PUT',
    body:formData
  });

  if(!response.ok){
    const errorData = await response.json()
      alert(errorData);
  }else{
    alert("updated successfully...!");
  }
}
