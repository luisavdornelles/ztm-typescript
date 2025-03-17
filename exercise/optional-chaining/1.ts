// Using optional chaining, print the price amount of each listed product. If
// there is no price amount, then print "not for sale".

import { strict as assert } from "assert";

interface Product {
  name: string;
  price?: {
    amount: number;
    currency: string;
  };
}

const phone: Product = {
  name: "Phone",
  price: {
    amount: 300,
    currency: "USD"
  }
};

const box: Product = {
  name: "Box"
};

function getPrice(prod: Product): string {
  if (prod.price?.amount !== undefined) {
    return prod.price.amount.toString();
  } else {
    return "not for sale";
  }
}

const boxPrice = getPrice(box);
const phonePrice = getPrice(phone);

console.log(boxPrice);
console.log(phonePrice);

assert.equal(boxPrice, "not for sale");
assert.equal(phonePrice, "300");
