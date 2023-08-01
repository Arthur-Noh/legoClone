# Portfolio Web
This project is portfolio(Arthur-Noh).

## Available Scripts
### Local test > `yarn start`
```
local > yarn start
localhost:3000 now connecting
```

### Server build > `yarn build`
```
local > ssh -i 'your key.pem' 'host@ip-address'
server > git pull --rebase (아이디, 비밀번호는 잘 입력하도록)
server > yarn build
server > pm2 start server.js (maybe server already running)
```

### If you can't "yarn build" (reboot server)
```
server > pm2 monit (서버 상태 확인하기)
server > pm2 kill
server > yarn build
server > pm2 start server.js
```