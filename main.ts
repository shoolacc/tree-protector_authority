radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(4)
basic.showIcon(IconNames.Yes)
basic.showString("Scanning trees...")
