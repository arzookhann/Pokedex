const capitalize = (word) => word && `${word[0].toUpperCase()}${word.slice(1)}`;

const reduceModalAPIData = (data) => {
  const abilityDescription = data.abilities
    .map((ability) => capitalize(ability?.ability?.name || ""))
    .join(" | ");

  let abilities = {};
  for (let i = 1; i <= 4; i++) {
    abilities[data.stats[i].stat.name] = data.stats[i].base_stat;
  }

  return (
    data && {
      image: data.image,
      id: data.id,
      title: data.name,
      labels: data.types.map((element) => element.type.name),
      abilityDescription,
      abilities,
      progressStats: {
        [data.stats[0].stat.name]: data.stats[0].base_stat,
        [data.stats[5].stat.name]: data.stats[5].base_stat,
      },
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
