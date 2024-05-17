class Dog  {
    is= '';
    log = () => console.log(this.is);
    bark = function() {
      this.is = "woofing";
      this.log();
      return this;
    };
    walk =function() {
      this.is = "walking";
      this.log();
      return this;
    };
    eat=function() {
      this.is = "eating";
      this.log();
      return this;
    };
  };
  const obj = new Dog();
  obj
    .bark()
    .eat()
    .walk()
  
  const a =  new Dog();
  a.log();
  obj.log();