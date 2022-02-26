const capitalize = (words) =>
  words &&
  words
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");

const reduceModalAPIData = (data) => {
  return (
    data && {
      image: data.image,
      id: data.id,
      title: data.name,
      labels: data.types.map((element) => element.type.name),
      abilities: {
        [data.stats[1].stat.name]: data.stats[1].base_stat,
        [data.stats[2].stat.name]: data.stats[2].base_stat,
        [data.stats[3].stat.name]: data.stats[3].base_stat,
        [data.stats[4].stat.name]: data.stats[4].base_stat,
      },
      progressStats: {
        [data.stats[0].stat.name]: data.stats[0].base_stat,
        [data.stats[5].stat.name]: data.stats[5].base_stat,
      },
      abilityDescription: [
        data.abilities[0]?.ability?.name || "",
        data.abilities[1]?.ability?.name || "",
      ],
    }
  );
};

const reduceAPIData = (data) => {
  return (
    data &&
    data.map((element) => ({
      title: element?.name,
      image: element?.image,
      labels: element?.type,
      abilities: {
        attack: element?.height,
        defence: element?.weight,
      },
    }))
  );
};

export { capitalize, reduceAPIData, reduceModalAPIData };
