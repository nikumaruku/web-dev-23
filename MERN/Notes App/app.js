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

const listSchema = {
  name: String,
  items: [itemSchema],
};

const listItem = mongoose.model("List", listSchema);

//Get root page (/Home)
app.get("/", async (req, res) => {
  try {
    const foundItems = await items.find({}).exec();
    console.log(foundItems);

    if (foundItems.length === 0) {
      await items.insertMany(collectionItems);
      return res.redirect("/");
    }

    console.log("Successfully retrieved items from DB");
    res.render("list", { listTitle: "Today", newListItems: foundItems });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//Add new notes
app.post("/", async function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new items({
    name: itemName,
  });

  if (listName === "Today") {
    console.log("This is listName: " + listName);
    await item.save();
    res.redirect("/");
  } else {
    const newItem = await listItem.findOne({ name: listName });
    newItem.items.push(item);
    await newItem.save();
    res.redirect("/" + listName);
  }
});

//Delete notes
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

//Create custom route
app.get("/:customRoute", async function (req, res) {
  const userRoute = req.params.customRoute;
  const checkList = await listItem.findOne({ name: userRoute });
  try {
    if (!checkList) {
      console.log("Doesnt exists");
      const list = new listItem({
        name: userRoute,
        items: collectionItems,
      });
      await list.save();
      res.redirect("/" + userRoute);
    } else {
      console.log("Exists");
      res.render("list", {
        listTitle: checkList.name,
        newListItems: checkList.items,
      });
    }
  } catch (e) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
});

//Listen to server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
