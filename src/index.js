import controllers from './controllers'

const greeter = (firstName='Masaki', familyName='Miyauchi') => {
  const message = `Hi, ${firstName} ${familyName}!
  Welcome to ECMAScript2015.`
  return console.log(message)
}

for (let i = 0; i < 3; i ++) {
  controllers.hoge(`${i+1} times.`)
  if (i == 1) {
    let [firstName, familyName] = ['Sho', 'Zama']
    greeter(firstName, familyName)
  } else {
    greeter()
  }
}