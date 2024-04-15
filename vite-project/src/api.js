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
export async function postTodo({ token, taskData }) {
    const response = await fetch(baseHost, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            "title": taskData.title,
            "topic": taskData.topic,
            "status": "Без статуса",
            "description": taskData.description,
            "date": taskData.date,
        }),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

// Изменить задачу
export async function putTodo({ token, id, taskData }) {
    const response = await fetch(baseHost + `/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            "title": taskData.title,
            "topic": taskData.topic,
            "status": taskData.status,
            "description": taskData.description,
            "date": taskData.date,
        }),
    });

    if (!response.status === 201) {
        throw new Error("Ошибка");
    }

    const data = await response.json();
    return data;
}

// Удалить задачу
export async function deleteTodo({ id, token }) {
    const response = await fetch(baseHost + `/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.status === 201) {
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