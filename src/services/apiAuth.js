export async function signup(newUser) {
  try {
    const res = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const { data } = await res.json();
    return data;
  } catch {
    throw Error("failed creating user");
  }
}
