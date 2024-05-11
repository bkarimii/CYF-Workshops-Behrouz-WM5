const express = require("express");
const albumsData = require("./albums.json");
const app = express();
app.use(express.json());

app.get("/albums", (req, res) => {
  res.send(albumsData);
});

const findAlbum = (arr, albumId) => {
  return arr.find((object) => (object.id = albumId));
};
app.get("/albums/:albumsId", (req, res) => {
  const albumId = req.params.albumsId;
  console.log(albumId);
  const foundedAlbum = findAlbum(albumsData, albumId);
  res.send(foundedAlbum);
});

app.post("/albums", (req, res) => {
  const newAlbum = req.body;
  console.log(newAlbum, "new album");
  albumsData.push(newAlbum);
  res.send("New album added successfully! ");
});

app.delete("/albums/:albumsId", (req, res) => {
  const albumIdForDel = req.params.albumsId;
  const foundedAlbum = findAlbum(albumsData, albumIdForDel);
  console.log(foundedAlbum, "this is album for delete");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
