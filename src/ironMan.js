var makeIronMan = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeIronMan.prototype = Object.create(makeDancer.prototype);
makeIronMan.prototype.constructor = makeIronMan;

makeIronMan.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // $('.hero2 .hero3').toggle();
  // $('.hero2').css('transform', 'rotate(0deg)');
  // this.$iron.toggle('.hero2');
};