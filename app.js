ain().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://hreehs1428:<db_password>@hariharan01.rlg7et6.mongodb.net/?retryWrites=true&w=majority&appName=Hariharan01/1cloudDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 }
 