const ids = new Set(['Abdul', 'Agara', 'David']);
ids.add(2);
ids.delete('hi');

for (const id of ids.values()) {
  console.log(id);
}

// console.log(ids.);
