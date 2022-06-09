let box = document.querySelector('.box');
let header = document.querySelector('.header') 

const fun = async () => {
    const response = await fetch('https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users');
    const result = await response.json();

    result.map(e => {

        // e

        let createdAt = [e['createdAt']];
        let firstName = [e['firstName']];
        let avatar = [e['avatar']];
        let lastName = [e['lastName']];
        let country = [e['country']];
        let zip = [e['zip']];
        let city = [e['city']];
        let phone = [e['phone']];
        let email = [e['email']];
        let status = [e['status']];
        let id = [e['id']]

        // createElement
        let tr = document.createElement('tr');
        let tdImage = document.createElement('td')
        let td = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let td9 = document.createElement('td')
        let td10 = document.createElement('td')
        let button1 = document.createElement('button')
        let a = document.createElement('a')


        // class
        button1.classList.add('delete')
        td9.classList.add('warp')
        td8.classList.add('text-box')
        tdImage.classList.add('avatar')


        // inner

        a.href = `oneUser.html?id=${id}`
        a.innerText = `update`
        a.innerHTML = `update`
        button1.innerHTML = `delete`
        td.innerHTML = createdAt;
        td1.innerHTML = firstName;
        td2.innerHTML = lastName;
        td3.innerHTML = country;
        td4.innerHTML = zip;
        td5.innerHTML = city;
        td6.innerHTML = phone;
        td7.innerHTML = email;
        tdImage.innerHTML = `<img src="${avatar}" >`


        // append

        box.prepend(tr)
        box.prepend(header)
        tr.append(tdImage)
        tr.append(td)
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tr.append(td5)
        tr.append(td6)
        tr.append(td7)
        tr.append(td8)
        td9.append(button1)
        td8.append(a)
        tr.append(td9)

        button1.onclick = async () => {

            const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
                method: 'DELETE'
            });
            document.location.href = 'index.html'
        }

    });
}
let newUser = document.querySelector('.newUser')
newUser.onclick = function () {
    document.location.href = 'newUser.html'
}

fun()


