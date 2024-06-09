import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true , 'please add Title'],
            unique:true
        },
        Description:{
            type:String,
            required:[true , 'please add Description'],
        }
    },
    {
        timestamps:true
    }
)

const Topic = mongoose.Schema.Topic || mongoose.model("Topic" ,topicSchema )

export default Topic