const {By} = require('selenium-webdriver')

const crossOff = async (driver) => {
   await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')

   await driver.findElement(By.xpath('//button')).click()

   await driver.findElement(By.xpath('//li//span')).click()
}
module.exports = {
   crossOff
}

// module.exports = {
//    addMovie: async(driver) => {
//       await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')

//       await driver.findElement(By.xpath('//button')).click()

//       const movie = await driver.findElement(By.xpath('//li//span'))
//       const displayed = movie.isDisplayed()

//       expect(displayed).toBeTruthy()
//    }
// }