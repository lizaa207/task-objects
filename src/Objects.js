export function personUpdate(person) {
  if (person.gender === 'female') {
    delete person.age;
  } else if (person.gender === 'male') {
    if (!('income' in person)) {
      person.income = 100000;
    }
  }

  return person;
}

export function objectFieldsList(...objects) {
  const fields = new Set();

  for (const obj of objects) {
    for (const key of Object.keys(obj)) {
      fields.add(key);
    }
  }

  return [...fields].sort();
}

export function objectClone(obj, count) {
  const clones = [];

  for (let i = 0; i < count; i++) {
    const clone = structuredClone(obj);
    clone.id = i;
    clones.push(clone);
  }

  return clones;
}
