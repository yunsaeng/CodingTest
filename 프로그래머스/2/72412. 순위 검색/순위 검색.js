function solution(info, queries) {
  const setDB = (info) => {
    const db = new Map();

    info.forEach((data) => {
      const [language, job, career, food, score] = data.split(" ");
      const key = `${language}-${job}-${career}-${food}`;
      if (!db.has(key)) db.set(key, [+score]);
      else db.set(key, [...db.get(key), +score]);
    });

    for (const [key, value] of db)
      db.set(
        key,
        value.sort((a, b) => b - a)
      );

    return db;
  };

  const setQuery = (query) => {
    const result = [];

    let [language, job, career, food, score] = query
      .split(" ")
      .filter((el) => el !== "and");

    language = language === "-" ? ["cpp", "java", "python"] : [language];
    job = job === "-" ? ["backend", "frontend"] : [job];
    career = career === "-" ? ["junior", "senior"] : [career];
    food = food === "-" ? ["chicken", "pizza"] : [food];

    for (const lang of language) {
      for (const j of job) {
        for (const c of career) {
          for (const f of food) {
            result.push([`${lang}-${j}-${c}-${f}`, +score]);
          }
        }
      }
    }

    return result;
  };

  const binarySearch = (data, value) => {
    let left = 0;
    let right = data.length - 1;
    while (left <= right) {
      let mid = ~~((left + right) / 2);
      if (data[mid] >= value) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };

  const db = setDB(info);

  return queries.map((query) => {
    let count = 0;
    const transQuery = setQuery(query);
    for (const [key, value] of transQuery) {
      if (db.has(key)) {
        count += binarySearch(db.get(key), value);
      }
    }
    return count;
  });
}