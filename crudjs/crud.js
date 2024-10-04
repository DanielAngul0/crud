// Variables
let users = [];
let userId = 0;

// Elementos del DOM
const userList = document.getElementById('userList');
const nameInput = document.getElementById('name');
const addUserBtn = document.getElementById('addUserBtn');

// Función para renderizar la lista de usuarios
renderUsers = () => {
    userList.innerHTML = ''; // Limpiar tabla
    users.forEach(user => {
        const tr = document.createElement('tr'); // Crear un nuevo elemento 'tr' (fila de tabla) utilizando el método createElement

        // Establecer el contenido HTML de la fila creada, incluyendo las celdas con los datos del usuario
        //El método innerHTML en JavaScript permite acceder o modificar el contenido HTML de un elemento
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editUser(${user.id})">Editar</button>
                <button class="action-btn delete-btn" onclick="deleteUser(${user.id})">Eliminar</button>
            </td>
        `;
        userList.appendChild(tr);//Agregar etiqueta tr al DOM
    });
}

// Función para agregar un nuevo usuario
addUser = () => {
    const userName = nameInput.value.trim();
    if (userName === '') {
        alert('Por favor ingrese un nombre.');
        return;
    }

    userId++;
    users.push({ id: userId, name: userName });
    nameInput.value = ''; // Limpiar campo de entrada
    renderUsers();
}

// Función para eliminar un usuario
deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    renderUsers();
}

// Función para editar un usuario
editUser = (id) => {
    const newUserName = prompt('Ingrese el nuevo nombre:');
    if (newUserName) {
        users = users.map(user => user.id === id ? { ...user, name: newUserName } : user);
        renderUsers();
    }
}

// Eventos
addUserBtn.addEventListener('click', addUser);

// Renderizar usuarios al cargar la página en otras palabras actualizando el DOM (Document Object Model) con los datos proporcionados
renderUsers();