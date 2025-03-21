// You are working on a system that manages different payment methods for an
// online store. Each payment method has a different fee charged by the
// provider.
//
// Requirements:
// - Create a `PaymentMethod` interface with the following properties:
//   - `providerName`: a string representing the payment provider's name.
//   - `calculateFee`: a method that accepts an amount (as a number) and returns
//     a number representing the fee that will be charged if the transaction
//     occurs.
// - Implement two different classes that implement the `PaymentMethod` interface:
//   - `CreditCardPayment` with a provider name of "Credit Card".
//      - This provider charges 0.5% of the transaction amount for a fee.
//   - `DebugCardPayment` with a provider name of "Debit Card".
//      - This provider charges a flat fee of 0.30 units.
// - Create instances of both `CreditCardPayment` and `DebitCardPayment`.
// - Print the fee for a payment of 100 using both payment methods.
//
// Notes:
// - We are using "units" for the monetary amounts. Feel free to think in terms
//   of your local currency.

import { strict as assert } from "assert";

type Fee = number;

//
// Write your code here
//

interface PaymentMethod {
    providerName: string;
    calculateFee(amount: number): Fee;
}

class CreditCardPayment implements PaymentMethod {
    providerName = "Credit Card";

    calculateFee(amount: number): Fee {
        return amount * 0.005;
    }
}

class DebitCardPayment implements PaymentMethod {
    providerName = "Debit Card";

    calculateFee(amount: number): Fee {
        return 0.30;
    }
}

// Test cases
assert.equal(new CreditCardPayment().calculateFee(100), 0.5);
assert.equal(new DebitCardPayment().calculateFee(100), 0.30);

