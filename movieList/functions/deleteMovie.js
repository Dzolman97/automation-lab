const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {
   await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')

   await driver.findElement(By.xpath('//button')).click()

   await driver.findElement(By.xpath('//li//button')).click()
}

module.exports = {
   deleteMovie
}


// const verifyMovie = async (driver) => {
//    const movie = 'Back to the Future'

//    await driver.findElement(By.css('input')).sendKeys(movie)

//    await driver.findElement(By.css('button')).click()

//    const movieText = await driver.findElement(By.xpath('//li/span')).getText()

//    expect(movieText).toEqual(movie)
// }

// module.exports = {
//    verifyMovie
// }