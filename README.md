# mini-project

npx sequelize-cli model:generate --name movie --attributes title:string,image:string,description:string,duration:integer,genre:string

npx sequelize-cli model:generate --name show --attributes date:string,startTime:string,endTime:string,movieId:integer,studioId:integer

npx sequelize-cli model:generate --name studio --attributes studioHall:string,totalSeat:integer,seatId:integer

npx sequelize-cli model:generate --name seat --attributes seatNumber:string

npx sequelize-cli model:generate --name booking --attributes numberOfSeat:integer,timeStamp:date,status:string,showId:integer,userId:integer

npx sequelize-cli model:generate --name customer --attributes name:string,password:string,phone:string

npx sequelize-cli model:generate --name showSeat --attributes price:integer,status:string,seatId:integer,bookingId:integer,showId:integer

npx sequelize-cli model:generate --name payment --attributes amount:integer,paymentTime:date,bookingId:integer
