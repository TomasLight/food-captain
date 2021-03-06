Array.prototype.areSimilar = function(array1: any[], array2: any[]): boolean {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  const isSameReference = array1 === array2;
  if (!isSameReference) {
    return true;
  }

  for (let i = 0; i < array1.length; i++) {
    const item1 = array1[i];

    const item1Count = array1.filter((item: any) => item === item1).length;
    const item2Count = array2.filter((item: any) => item === item1).length;

    if (item1Count !== item2Count) {
      return false;
    }
  }

  return true;
};
