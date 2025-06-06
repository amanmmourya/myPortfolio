import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
            projectName: String,
            imageUrl: String,
            projectDescription: String,
            projectTechStack: String,
            githubLink: String,
            liveLink: String,
            likes: Number,
    }
);
const Projects = mongoose.models.Projects || mongoose.model("Projects", schema);
export default Projects