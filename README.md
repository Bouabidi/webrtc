# StreamApp

Watch PeerJS documentation [here](http://peerjs.com).


# Install on Debian and Ubuntu based Linux distribution

## Install NodeJS
### With curl
```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install -y build-essential
```
### With Brew
```bash
brew update && brew install nodejs
```

Check the install :
```bash
node -v
```

## Install MongoDB
```bash
sudo apt-get install mongodb-server mongodb-clients
```

Check the install :
```bash
mongo
```

## Install NPM or Yarn (Package managers)
```bash
sudo apt-get install npm
```
## Install Server Side
```bash
cd backend/
npm install
```

Run the server :
```bash
./bin/www
```

## Install Client Side

```bash
npm install
```

## Run the client :
```bash
ng serve
```

### Create Electron App
```bash
npm run package-all
```




