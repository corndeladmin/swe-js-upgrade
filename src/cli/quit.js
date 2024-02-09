export function quitAction(rl) {
  async function quit() {
    const answer = await rl.question("Are you sure you want to quit?\ny/n: ")
    if (answer.match(/^y(es)?$/i)) {
      rl.close()
    }
  }

  return {
    q: { description: "(Q)uit", callback: quit },
  }
}
