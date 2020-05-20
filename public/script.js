var botui = new BotUI("hello-world");
var human_name = "None";
var human_description = "None";
var human_feedback = "None";
var human_subed = "None";
botui.message
  .add({
    content: "Hello, What is your name?",
    delay: 1000
  })
  .then(function() {
    botui.action
      .text({
        addMessage: false,
        delay: 1000,
        action: {
          placeholder: "Enter your name"
        }
      })
      .then(function(res) {
        human_name = res.value;
        botui.message
          .add({
            human: true,
            delay: 500,
            content: "My name is " + res.value
          })
          .then(function(res) {
            botui.message
              .add({
                content: "Nice to meet you " + human_name + "!",
                delay: 1000
              })
              .then(function(res) {
                botui.message
                  .add({
                    content: "How was your expirence?",
                    delay: 1000
                  })
                  .then(function(res) {
                    botui.action
                      .button({
                        delay: 1000,
                        action: [
                          {
                            text: "🌟",
                            value: "1"
                          },
                          {
                            text: "🌟🌟",
                            value: "2"
                          },
                          {
                            text: "🌟🌟🌟",
                            value: "3"
                          },
                          {
                            text: "🌟🌟🌟🌟",
                            value: "4"
                          },
                          {
                            text: "🌟🌟🌟🌟🌟",
                            value: "5"
                          }
                        ]
                      })
                      .then(function(res) {
                        human_feedback = res.value;
                        botui.message
                          .add({
                            content: "Thanks for the feedback",
                            delay: 1000
                          })
                          .then(function(res) {
                            botui.message
                              .add({
                                content:
                                  "Made by [Sudhan Playz](https://github.com/SudhanPlayz)",
                                delay: 1000
                              })
                              .then(function(res) {
                                botui.message
                                  .add({
                                    content:
                                      "We have Discord Server -> [Click Me](https://discord.gg/ydcg5SK)",
                                    delay: 1000
                                  })
                                  .then(function(res) {
                                    botui.action
                                      .button({
                                        delay: 1000,
                                        action: [
                                          {
                                            text: "Done",
                                            value: "done"
                                          },
                                          {
                                            text: "No",
                                            value: "no"
                                          }
                                        ]
                                      })
                                      .then(function(res) {
                                        if (res.value === "done") {
                                          botui.message.add({
                                            content:
                                              "Thanks for joining the Discord Server",
                                            delay: 1000
                                          });
                                        }
                                        if (res.vaue === "no") {
                                          botui.message.add({
                                            content:
                                              "Okay, Thanks for chatting with me",
                                            delay: 1000
                                          });
                                        }
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });
