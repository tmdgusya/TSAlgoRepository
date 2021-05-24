function defangIPaddr(address: string): string {
  let result: string = "";
  address.split("").forEach((value) => {
    if (value === ".") {
      value = "[.]";
    }
    result += value;
  });
  return result;
}

console.log(defangIPaddr("1.1.1.1"));
