const message = document.querySelector(".message");
const appscroll = document.querySelector(".app-body");

document.querySelector(".btn2").addEventListener("click", () => {
  const chat1 = document.createElement("div");
  chat1.classList.add("chat-1");
  const textchat1 = document.createTextNode(message.value);
  chat1.appendChild(textchat1);
  appscroll.appendChild(chat1);

  const chat2 = document.createElement("div");
  chat2.classList.add("chat-2");
  chat2.style.width = "fit-content";
  const textchat2 = document.createTextNode("OK!");
  chat2.appendChild(textchat2);
  appscroll.appendChild(chat2);

  appscroll.scrollTop = appscroll.scrollHeight;
  message.value = "";
});
