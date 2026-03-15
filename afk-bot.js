const bedrock = require("bedrock-protocol")

function startBot() {

const client = bedrock.createClient({
  host: "BobuPower.aternos.me",
  port: 27258,
  username: "AFKBot"
})

client.on("join", () => {
  console.log("Bot joined the server")
})

client.on("spawn", () => {
  console.log("Bot spawned")

  setInterval(() => {
    console.log("Anti AFK running...")
  }, 30000)
})

client.on("disconnect", () => {
  console.log("Disconnected. Reconnecting...")
  setTimeout(startBot, 5000)
})

client.on("error", err => console.log(err))

}

startBot()
