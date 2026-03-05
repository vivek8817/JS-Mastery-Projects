class BankAccount {

    #balance;// Abhi private rakhte hain

    constructor(ownerName, initialBalance) {
        this.owner = ownerName;
        this.#balance = initialBalance; // Abhi public rakha  hain test karne ke liye
    }

    checkBalance() {
        console.log(`${this.owner}'s Balance: $${this.#balance}`);
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("❌ Insufficient Funds!");
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn ${amount}. Remaining: ${this.#balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(OwnerName, initialBalance, interestRate) {
        super(OwnerName, initialBalance)
        this.rate = interestRate;
    }

    addInterest(){
        let interestAmount = this.rate * 10;
        console.log(`adding interest...`);
        this.deposit(interestAmount);
    }
}

const saver = new SavingsAccount("Vivek Saver", 2000, 0.5);
saver.checkBalance(); // Parent method works
saver.addInterest();  // Child method works.
// saver.#balance;    // abhi bhi  error (Good security)