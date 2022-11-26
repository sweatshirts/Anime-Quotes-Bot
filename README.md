### 🧃 Requirements
- Node.js 16.9.0 or newer

### 🐱‍💻 Installation
- git clone https://github.com/sweatshirts/Anime-Quotes-Bot.git
- cd Anime-Quotes-Bot
- npm install

In order to have the bot running properly, you'll have to provide your own discord bot's token!

- In order to get a discord token, first you'll need to navigate to the following link: https://discord.com/developers/applications/
- Once there, click on your application name, than on the sidebar click "Bot".
- On newly opened page click on "Reset Token" and "Yes, do it!" on the pop up!
- Now, you should be able to copy your token. ***DO NOT*** share this token with *anyone*

``vim token.json``

The contents of the file should be similar to the following:
```
{
    "token": " "
}
```

- After you've copied the token in previous step, now it's time to paste your discord token between the quotes.<br/> Its important to remember that ctrl+v doesn't work in most terminals. To paste, move inside the quotes with your arrow keys on your keyboard and simply right click!

**protip**: ``In order to edit a file with vim you need to press the letter "i" on your keyboard. After you've finished editing, press escape and than HOLD shift and press the z key twice fast in order to exit and save``

### 💬 Provide the quotes
In order for quotes to work, you'll need to *provide* some.

``vim quote.txt``

Remember: It's one quote per line!

### 🎉 Running the bot
Execute one simple command: ``npm . ``<br/>
Yes, that's it!

### 🎮 Bot commands
- ``/quote`` - Replies with a random quote you've written inside the quote.txt file
- ``/uwuball`` - A Magic8Ball clone, replies with standard 8Ball answers. So other than a silly name, it's nothing special!
- ``/ping`` - The bot will reply with "pong! im alive, i think..." and show it's current ping in milliseconds


### 🤝 Contributing

There's currently a known bug in the following file: ``\events\ready.js``
 - The code included SHOULD update bot's status every 15 minutes, but it doesnt seem to be working
 - If you think you can fix it, fork the repository, fix the bug and PR. I appreciate you in advance! 
