const players = ["Joe", "Caroline", "Sabrina"];

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

players
  .reduce((promiseChain, player) => {
    return promiseChain
      .then(() => luckyDraw(player))
      .then((resolvedValue) => console.log(resolvedValue))
      .catch((error) => console.error(error.message));
  }, Promise.resolve())
  .catch((error) => console.error(error.message));
