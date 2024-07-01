export function getMessages() {
  return fetch("http://localhost:3001/api/v1/messages")
    .then((res) => {
      if (!res.ok) {
        throw Error("Hey you fucked up.");
      } else {
        return res.json();
      }
    })
    .catch((err) => console.log(err));
}
