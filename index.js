let characters

async function getCharacters() {
   const res = await fetch(`./characters.json`)
   if(res.ok) {
     const json = await res.json()
     window.localStorage.setItem("characters", JSON.stringify(json[0]))
     return true
   }
   throw res.errorCode
}

 function setMenu() {
  const characters = JSON.parse(window.localStorage.getItem("characters"))

  const nav = document.querySelector("nav")
  let menuItems = ""
  for (const [key, value] of Object.entries(characters)) {
      menuItems += `<button onClick="showFrameData" id="${key}">${key}</button>`
  }
  nav.innerHTML = menuItems
}

function showFrameData(characterId) {
  console.log(characterId)
  const characters = JSON.parse(window.localStorage.getItem("characters"))
  const char = characters[characterId]

  let tableString = ""
  for (let move of char) {
    let cancel = ""
    for (const [key, value] of Object.entries(move.Cancel)) {
      cancel += `<span class="cancel-box ${value ? key + "--" + value : ""}">
        ${key === "Super_art" ? "SA" : "" ||
          key === "Special" ? "SP" : "" ||
            key === "Self" ? "SC" : "" ||
              key === "Chain" ? "NC" : "" ||
                key === "Dash" ? "DC" : "" ||
                  key === "High_jump" ? "SJ" : ""}
      </span>`
    }

    console.log(move.Bar_gain_attacker)

    tableString += `<tr>
      <td>${move.Name}</td>
      <td>${move.Startup}</td>
      <td>${move.Hit}</td>
      <td>${move.Recovery}</td>
      <td>${move.Block_advantage}</td>
      <td>${move.Hit_advantage}</td>
      <td>${move.Crouch_hit_advantage}</td>
      <td><div class="cancel-container">${cancel}</div></td>
      <td>${move.Parry.High ? "H" : ""}${move.Parry.High && move.Parry.Low ? "+" : ""}${move.Parry.Low ? "L" : ""} </td>
      <td>${move.Kara_range}</td>
      <td>${move.Throw_range}</td>
      <td>${move.Damage}</td>
      <td>${move.Stun}</td>
      <td>${move.Bar_gain_attacker ? move.Bar_gain_attacker.Whiff : ""}/${move.Bar_gain_attacker ? move.Bar_gain_attacker.Hit : ""}/${move.Bar_gain_attacker ? move.Bar_gain_attacker.Block : ""}</td>
      <td>${move.Bar_gain_opponent ? move.Bar_gain_opponent.Hit+ "/" : ""}${move.Bar_gain_opponent ? move.Bar_gain_opponent.Block : ""}</td>
      </tr>
    `
  }

  const content = document.querySelector("main tbody")
  content.innerHTML = tableString
}

async function initialize() {
  await getCharacters()
  setMenu()
  const btns = document.querySelectorAll('nav button')
  btns.forEach(btn => {
     btn.addEventListener('click', event => {
          showFrameData(event.target.id);
     });
  });
}
