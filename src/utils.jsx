export async function getAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  if (response.ok) {
    let json = await response.json();
    return json.slip;
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}
