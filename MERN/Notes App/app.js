const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const itemSchema = mongoose.Schema({
  name: String,
});

mongoose.connect("mongodb://localhost/notesDB");

const items = mongoose.model("Items", itemSchema);

const item1 = new items({ name: "Orange" });
const item2 = new items({ name: "Apple" });
const item3 = new items({ name: "Durian" });

const collectionItems = [item1, item2, item3];

app.get("/", async (req, res) => {
  try {
    const foundItems = await items.find({}).exec();

    if (foundItems.length === 0) {
      await items.insertMany(collectionItems);
      return res.redirect("/");
    }

    console.log("Successfully retrieved items from DB");
    res.render("list", { newListItems: foundItems });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const item = new items({
    name: itemName,
  });
  item.save();
  res.redirect("/");
});

app.post("/delete", async function (req, res) {
  const checkedItem = req.body.checkbox;
  try {
    await items.deleteOne({ _id: checkedItem });
    console.log("Successfully deleted item from DB");
  } catch (err) {
    console.error(err);
  }
  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
