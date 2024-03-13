const baseHost = 'https://wedev-api.sky.pro/api/kanban';
const userHost = 'https://wedev-api.sky.pro/api/user';

// Получить список задач
export async function getTodos({ token }) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.status === 200) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

// Добавить задачу в список
export async function postTodo({ task, token }) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify(task),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

// Изменить задачу
export async function putTodo({ task, _id, token }) {
    const response = await fetch(baseHost + `/${_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
            task,
            _id,
            token,
        }),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

// Удалить задачу
export async function deleteTodo({ task, _id, token }) {
    const response = await fetch(baseHost + `/${_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
            task,
            _id,
            token,
        }),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

// Получить список пользователя
export async function getUserList(token) {
    const response = await fetch(userHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.status === 200) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

// Регистрация
export async function signUp({ login, name, password }) {
    return fetch(userHost, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Такой пользователь уже существует");
        }
        return response.json();
    });
}

// Авторизация
export async function signIN({ login, password }) {
    return fetch(userHost + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Неверный логин или пароль");
        }
        return response.json();
    });
}