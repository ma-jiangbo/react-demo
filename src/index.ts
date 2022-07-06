const element = document.createElement('button')
element.innerText = 'click me'
element.onclick = () => {
    console.log('click');
}

document.body.appendChild(element)