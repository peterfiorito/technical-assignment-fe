const gameChoices = {
  validChoices: () => ['r', 'p', 's'],
  rules: {
    r: { winsOver: ['s'] },
    p: { winsOver: ['r'] },
    s: { winsOver: ['p'] }
  }
}


export default gameChoices;