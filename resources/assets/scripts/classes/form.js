import Error from './error.js';

class Form {
  constructor(fields) {
    this.errors = new Error();
    this.fields = fields;

    for (let field in fields) {
      this[field] = fields[field];
    }
  }

  data() {
    let fields = {};

    for (let field in this.fields) {
      fields[field] = this[field];
    }

    return fields;
  }

  reset() {
    for (let field in this.fields) {
      this[field] = this.fields[field];
    }

    this.errors.clear();
  }

  submit(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(url, this.data());
        this.reset();
        resolve(response.data);
      } catch (error) {
        this.errors.record(error.response.data.errors);
        reject(error.response.data.errors);
      }
    });
  }
}

export default Form;
