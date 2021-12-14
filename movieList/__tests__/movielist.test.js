const { Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {crossOff} = require('../functions/crossOff')
const {deleteMovie} = require('../functions/deleteMovie')

beforeEach(async () => {
   await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll( async () => {
   await driver.quit()
})

test('Delete Movie', async () => {
   await deleteMovie(driver)

   await driver.sleep(5000)
}) 

test('Cross off Movie', async () => {
   await crossOff(driver)

   await driver.sleep(5000)
})

// test('Add a movie', async () => {
//    await addMovie(driver)

//    await driver.sleep(5000)
// })

// test('Displayed movie mathced entered movie', async () => {
//    await verifyMovie(driver)

//    await driver.sleep(5000)
// })