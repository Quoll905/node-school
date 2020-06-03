const userArray = process.argv.slice(2);
const [,user, email] = userArray;

console.log(`{ username: '${user}', email: '${email}' }`);
