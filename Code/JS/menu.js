function inputname(){
    document.getElementById('butoes').innerHTML = `<input type = "text" id = "nome" placeholder = "Escolhe o teu nome!"></input>
    <button id = "submit" onclick = submit() >Confirmar</button>
    <button id = "back" onclick = back()>Sair</button>`;
}

function back(){
    document.getElementById('butoes').innerHTML = `<button class="btn1" onclick=inputname()>Novo Jogo</button>
    <button class="btn2">Sair</button>`
}

function tutorial(){
    document.getElementById('butoes').innerHTML = `<h3 id = "move">W/A/S/D - Para mover</h3>
    <h3 id = "inte">E - Para interagir</h3>`;
}

function submit(){
    let nome = document.getElementById('nome').value
    window.location.href='game.html'
    console.log(nome)
}
    <button id = "submit">Confirmar</button>;



