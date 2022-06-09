let params = (new URL(document.location)).searchParams;
let id = params.get('id')


const getSingleUser = async () =>{
    const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`);
    const result = await response.json()
 let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#LastName')
let country = document.querySelector('#country')
let zip = document.querySelector('#zip')
let city = document.querySelector('#city')
let phone = document.querySelector('#phone')
let email = document.querySelector('#email')


 firstName.value = result.firstName;
 lastName.value = result.lastName;
 country.value = result.country;
 zip.value = result.zip;
 city.value = result.city;
 phone.value = result.phone;
 email.value = result.email


}
const updateUser = async () =>{
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#LastName').value
let country = document.querySelector('#country').value
let zip = document.querySelector('#zip').value
let city = document.querySelector('#city').value
let phone = document.querySelector('#phone').value
let email = document.querySelector('#email').value


console.log(firstName)
    
   const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
       method: 'PUT',
       headers: { 'content-type': 'application/json'},
       body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        country: country,
        zip: zip,
        city: city,
        phone: phone,
        email: email
       })
   })
 const contant = await response.json()
document.location.href = 'index.html'

  
    
}
getSingleUser()
function Back(){
    document.location.href = 'index.html';
    }