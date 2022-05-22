const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req,res,next) => {
  const id = req.params.id;
  let book;
  try{
    book = await Book.findById(id)
  }catch(err) {
    console.log(err)
  }

  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ book });
}

const addBooks = async (req, res, next) => {
  
  const { name, author, description, price, available,image } = req.body;
  let book;

  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image
    });
    await book.save();
    
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ book });
};

const updateBook = async(req,res,next) => {
  const id = req.params.id;
  let book;
  const {name,author, description, price, available,image} = req.body;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image
    })
    book = await book.save()
  } catch(err) {
    console.log(err)
  }

  if (!book) {
    res.status(404).json({ message: "unable to update by this id" });
  }
  return res.status(201).json({ book });

}

const deleteBook = async (req,res,next)=> {
  const id=req.params.id;
  let book;
  const {name, author, description, price, available,image} =req.body;
  try{
    book = await Book.findByIdAndRemove(id)
   
  } catch(err) {
    console.log(err)
  }

  if (!book) {
    res.status(404).json({ message: "unable to delete by this id" });
  }
  return res.status(201).json({ message:"Product is successfully deleted " });

}
exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook= updateBook;
exports.deleteBook=deleteBook;