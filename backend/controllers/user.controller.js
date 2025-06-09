import User from "../models/user.model";

export const getUserProfile = async (req, res) => {
    const {username} = req.params;
    try {
        const user = await User.findOne({username}).select("-password");
        if(!user) return res.status(404).json({message: "User not found"});
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getUserProfile controller", error.message);
        res.status(500).json({error: error.message});
    }
}

export const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if(id === req.user._id){
            return res.status(400).json({ error: "You cannot follow or unfollow yourself" });
        }
    } catch (error) {
        console.log("Error in getUserProfile controller", error.message);
        res.status(500).json({error: error.message});
    }
}