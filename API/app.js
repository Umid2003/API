fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => {
        data.map(user => {
            const container = document.querySelector('.container')
            const title = document.createElement('h1')
            const title1 = document.createElement('h2')
            const title2 = document.createElement('h3')
            const title3 = document.createElement('h4')
            const title4 = document.createElement('h5')
            const card = document.createElement('div')
            title.innerHTML = `Name: ${user.name}`
            title1.innerHTML = `Username: ${user.username}`
            title2.innerHTML = `Email: ${user.email}`
            title3.innerHTML = `Phone: ${user.phone}`
            title4.innerHTML = `Company: ${user.company.name}`
            card.classList.add('card')
            container.append(card)
            card.append(title, title1, title2, title3, title4)
        })
    })
