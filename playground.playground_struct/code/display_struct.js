module.exports.function = function display_struct () {

  var test = ["Test text one", "Text text 2", "Test text 3"];

  var img = ["images/example_pic.png"];

  var all = {
    text: test[Math.floor(Math.random() * 3)],
    random_pic: {
      url: img[0]
    }
  }
  
  return all
}