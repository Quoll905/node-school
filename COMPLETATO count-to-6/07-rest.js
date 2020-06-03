module.exports = function average(...nums) {

  return (nums.reduce((p,c)=>p+c))/nums.length;

};
