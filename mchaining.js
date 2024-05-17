const dog = {
    is: null,
    log: () => console.log(this.is),
    bark() {
      this.is = "woofing";
      this.log();
      return this;
    },
    walk() {
      this.is = "walking";
      this.log();
      return this;
    },
    eat() {
      this.is = "eating";
      this.log();
      return this;
    }
  };
  
  dog
    .bark()
    .eat()
    .walk()
    .log();
