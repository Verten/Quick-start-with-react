module.exports = {
  tags: ['homepage'],
  'Demo test Google': function(client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 2000)
      .assert.title('React App')
      .assert.visible('button[name=increase]')
      .assert.visible('button[name=decrease]')
      .pause(2000)

    client.click('button[name=increase]').pause(1000)
    client.click('button[name=increase]').pause(1000)
    client.click('button[name=increase]').pause(1000)
    client.assert.containsText('div[name=count]', '3')

    client.click('button[name=decrease]')
    client.assert.containsText('div[name=count]', '2').pause(2000)

    client.end()
  },
}
