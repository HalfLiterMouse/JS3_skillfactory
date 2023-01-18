function ElectricalAppliances(type, model, power) {
    this.type = type,
    this.model = model,
    this.power = power,
    this.isOffOn = false
}

ElectricalAppliances.prototype.on = function() {
    console.log(`The ${this.type} ${this.model} is on`);
    this.isOffOn = true;
};

ElectricalAppliances.prototype.off = function() {
    console.log(`The ${this.type} ${this.model} is off`);
    this.isOffOn = false;
};

ElectricalAppliances.prototype.totalPower = function() {
    if (this.isOffOn) return this.power;
    else return 0;
}

const fridge = new ElectricalAppliances('Fridge', 'LG', 1000);
const toaster = new ElectricalAppliances('Toaster', 'Bosch', 580);
const kettle = new ElectricalAppliances('Kettle', 'Redmond', 2100);

fridge.on();
toaster.off();
kettle.on();

console.log(`Total power = ${fridge.totalPower() + toaster.totalPower() + kettle.totalPower()} watt`);