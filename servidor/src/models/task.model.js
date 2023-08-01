import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
});

export default mongoose.model("Task", TaskSchema);