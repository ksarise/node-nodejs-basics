const parseArgs = () => {
  const args = process.argv.slice(2);

  args.reduce((_, arg, index, array) => {
    if (index % 2 === 0) {
      const propName = arg.replace(/^--/, "");
      const value = array[index + 1];
      console.log(`${propName} is ${value}`);
    }
  }, null);
};

parseArgs();
