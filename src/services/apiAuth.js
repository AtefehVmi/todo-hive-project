import { USER_URL } from "../utils/constants";

export async function signup(newUser) {
  try {
    const res = await fetch(`${USER_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch {
    throw Error("failed creating user");
  }
}

export async function login(user) {
  try {
    const res = await fetch(`${USER_URL}/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    // console.log(data);
    return data;
  } catch {
    throw Error("failed creating user");
  }
}

export async function getUser() {
  try {
    const res = await fetch(`${USER_URL}/info`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    console.log(data);
    return data;
  } catch {
    throw Error("failed getting user info!");
  }
}
