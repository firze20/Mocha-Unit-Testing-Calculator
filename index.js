const Calculate = {
    sum(inputArray) {
        if(inputArray.length === 0) {
            return 0;
        }
        else {
            const initialValue = 0;
        const totalSum = inputArray.reduce(
            (prevNumber, currentNumber) => prevNumber + currentNumber, initialValue
        );
        return totalSum;
        }
    },
};

module.exports = Calculate;


