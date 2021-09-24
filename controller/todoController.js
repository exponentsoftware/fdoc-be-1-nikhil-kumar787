const Todo = require("../model/todoModel");

///// Add todo /////////
exports.addTodo = async (req, res) => {
  const { username, title, category } = req.body;
  /// category = shudld be this value "task", "hobby", "work"],
  //console.log(title, category);

  const todo = new Todo({
    username,
    title,
    category,
  });

  todo.save((error, todo) => {
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

    if (todo) {
      return res.status(201).json({
        message: "Successfully addded a Todo",
      });
    }
  });
};

/////////////// Get All Todo//////////////

exports.getallTodo = async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json({ todo });
};

/////////////// Get by Todo Id //////////////

exports.gettodoById = async (req, res) => {
  let id = req.params.id;

  const todo = await Todo.findById({ _id: id });
  res.status(200).json({ todo });
};
/////////////// Get by Todo Id //////////////

exports.updateTodo = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);

    const todo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidator: true,
      useFindAndModify: false,
    });

    res.status(200).json({ message: todo });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTodo = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  const todo = await Todo.findOneAndDelete({ _id: id });

  if (todo) {
    res.status(201).json({ message: "Todo removed" });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
};
