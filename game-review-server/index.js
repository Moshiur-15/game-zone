require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: ['http://localhost:5173'],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ltfsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const collection = client.db("masiurislam").collection("reviews");
    const wishlist = client.db("masiurislam").collection("wishlist");
    // reviews api
    app.get('/allReview', async(req, res)=>{
      const userEmail = req.query.email;
      const query = userEmail ? {userEmail:userEmail}:{};
      const review = await collection.find(query).toArray();
      res.send(review);
    })

    // wishlist api
    app.get('/wishlist', async(req, res)=>{
      const userEmail = req.query.email;
      const query = userEmail ? {userEmail:userEmail}:{};
      const wishlistItem = await wishlist.find(query).toArray();
      res.send(wishlistItem);
    })


    // get details
    app.get('/allReview/:id', async(req, res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const review = await collection.findOne(query);
      res.send(review);
    })

    // post addReview
    app.post('/allReview',async(req, res)=>{
      const review = req.body;
      const result =await collection.insertOne(review);
      res.send(result);
    })

    // post wishlist
    app.post('/wishlist',async(req, res)=>{
      const wishlistItem = req.body;
      const result =await wishlist.insertOne(wishlistItem);
      res.send(result);
    })
    
    // delete
    app.delete('/allReview/:id', async(req, res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await collection.deleteOne(query);
      res.send(result);
    })
    
    // patch
    app.patch('/allReview/:id', async(req, res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          cover: req.body.cover,
          gameTitle: req.body.gameTitle,
          reviewDescription: req.body.reviewDescription,
          rating: req.body.rating,
          genre: req.body.genre, 
          userName: req.body.userName,
          userEmail: req.body.userEmail,
        }
      }
      const result = await collection.updateOne(query, updateDoc);
      res.send(result);
    })
  
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('game review server')
})

app.listen(port, () => {
  console.log(`game review server ${port}`)
})