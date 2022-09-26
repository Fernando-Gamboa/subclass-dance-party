var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;

makeSuperHeroDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$super.animate({
    left: '+=300'

  }, 1000, 'swing', this.$super.animate({
    left: '-=200'
  }));
};