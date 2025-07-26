// const mongoose =requir('mongoose');
// mongoose.connect('mongodb+srv://hreehs1428:<db_password>@hariharan01.rlg7et6.mongodb.net/?retryWrites=true&w=majority&appName=Hariharan01/1cloudDB');
// getting-started.js
// const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://hreehs1428:<db_password>@hariharan01.rlg7et6.mongodb.net/?retryWrites=true&w=majority&appName=Hariharan01/1cloudDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 }

//------------Cloud-Cluster

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://hreehs1428:<db_password>@hariharan01.rlg7et6.mongodb.net/?retryWrites=true&w=majority&appName=Hariharan01";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
