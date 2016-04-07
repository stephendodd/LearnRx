const Console = {
    records: null,
    log(...args) {
        console.log(...args);
        this.records = this.records || [];
        this.records.push(...args);
    }
};

export default Console;
