type MapStringCallback = (item: string) => string;

function mapString(array: string[], cbfn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item !== undefined) newArray.push(cbfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
