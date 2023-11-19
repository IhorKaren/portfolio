const addNumberAndSymbolToEachLine = (text, symbol = '*') => {
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i += 1) {
    if (i === 0 || i === lines.length - 1) {
      lines[i] = `${i + 1} ${lines[i]}`;
      continue;
    }

    lines[i] = `${i + 1} ${symbol} ${lines[i]}`;
  }

  return lines;
};

export default addNumberAndSymbolToEachLine;
