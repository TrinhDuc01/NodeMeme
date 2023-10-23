

const memeController = {
    createMeme: async (req, res) => {
        let meme = req.file;
        return res.status(200).json(req.body)
    },
    updateMeme: async (req, res) => {
        
    },
    deleteMeme: async (req, res) => {
        
    },
    getUpdateMeme: async (req, res) => {
        
    },
    getAllMeme: async (req, res) => {
        
    }
}

export default memeController;