const event = {
    name: "kavo",
    printNameSimpleFunction: function () {
        console.log('printNameSimpleFunction ', this.name);
    },
    printNameArrowFunction: () => {
        console.log('printNameArrowFunction ', this.name);
    }
}

event.printNameSimpleFunction();
event.printNameArrowFunction();

