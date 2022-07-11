========== Update Package ==========
npm install

========== SET mysql cred in .env ==========


========== Update Models ==========
sequelize-auto -o "./models" -d uploadfile -h localhost -u root -p 3306 -x  -e mysql -t  files


========== Start Project ==========
node server

