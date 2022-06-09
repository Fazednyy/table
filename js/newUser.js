
const updateUser = async () => {
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#LastName').value
    let country = document.querySelector('#country').value
    let zip = document.querySelector('#zip').value
    let city = document.querySelector('#city').value
    let phone = document.querySelector('#phone').value
    let email = document.querySelector('#email').value


    console.log(firstName)
    if (firstName !== "" && email !== '' && lastName !== '' && country !== ''
        && zip !== '' && city !== '' && phone !== '') {
        const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
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
    else {
        alert("заполните все поля")
    }

}

function Back(){
document.location.href = 'index.html';
}
