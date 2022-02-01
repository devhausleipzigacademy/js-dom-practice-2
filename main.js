const myName = "Franz Wollang";
const myEmail = "franz@example-email.com"

document.getElementById('myName').innerHTML = myName

document.getElementById('myEmail').innerHTML = myEmail
document.getElementById('myEmail').setAttribute('href', `mailto:${myEmail}`)

const newBlogElement = document.createElement('li')
newBlogElement.innerHTML = 'test'
// add data to element
document.getElementById('blog-list').appendChild(newBlogElement)