export function quitAction(rl) {
  function quit() {
    rl.question('Are you sure you want to quit?\ny/n: ', (answer) => {
      if (answer.match(/^y(es)?$/i)) {
        rl.close()
      } 

      rl.prompt()
    })
  }

  return {
    q: { description: '(Q)uit', callback: quit },
  }
}
