# Setup

Do this before the first session. It takes about 15 minutes.

## 1. A browser with DevTools

Use **Chrome** or **Edge**. Press **F12** (on a Mac: **Cmd + Option + J**) and click **Console**. This is where JavaScript prints its output and its errors. Keep it open all workshop.

Using Safari? Turn on Safari → Settings → Advanced → “Show features for web developers”, then press **Cmd + Option + C**. In the console, make sure **All** is selected in the filter row, or your `console.log` messages are hidden.

## 2. VS Code

Download it from [code.visualstudio.com](https://code.visualstudio.com/).

Useful to know:

- New HTML file: save it with a name ending in `.html` first (for example `index.html`), then type `!` and press **Enter**. You get a full HTML page to start from.
- A file named only `.html` (nothing before the dot) won’t get this shortcut. Always give the file a name.

## 3. The Live Server extension

In VS Code, open Extensions (**Cmd + Shift + X** or **Ctrl + Shift + X**), search for **Live Server** by Ritwick Dey, and install it.

To run a page: right-click the `.html` file → **Open with Live Server**. The page opens in your browser and reloads every time you save.

## 4. Node.js (for Days 2 and 3)

Download the **LTS** version from [nodejs.org](https://nodejs.org/). Check it worked: open a terminal in VS Code (**Ctrl + `**) and type:

```bash
node --version
npm --version
```

Both should print a version number. Node 22 or newer is recommended.

To run a React project from this repo:

```bash
cd day-2-react/hostel-split/react-starter
npm install
npm run dev
```

Then open the `http://localhost:…` link it prints. Press **Ctrl + C** in the terminal to stop it.

## 5. Git and GitHub

- Install Git from [git-scm.com](https://git-scm.com/) if `git --version` doesn’t work.
- Create a GitHub account, fork this repo, and clone your fork:

```bash
git clone https://github.com/nithyasatish28/javascript-workshop.git
```

## Checklist

- [ ] Console opens and shows output
- [ ] VS Code installed, `!` gives an HTML page
- [ ] Live Server opens a page
- [ ] `node --version` prints a number
- [ ] Your fork of this repo is cloned
