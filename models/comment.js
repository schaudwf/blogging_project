const { Schema, model}  = require("mongoose");

const commentSchema = new Schema({
    content:{
        type: String,
        require: true,
    },
blogId:{
    type: Schema.Types.ObjectID,
    ref : "blog",
},

    createdBy:{
        type: Schema.Types.ObjectID,
                ref : "user",
    },
},
{timestamps: true}
)

const Comment = model("comment", commentSchema);

module.exports = Comment;