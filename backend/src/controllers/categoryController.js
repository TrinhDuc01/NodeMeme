import categoryService from "../services/categoryService";




const categoryController = {
    createCategory: async (req, res) => {
        const dataCategory = {
            name: req.body.name == undefined ? '' : req.body.name,
            isActive: req.body.isActive == undefined ? '' : req.body.name
        }
        const createCategoryState = await categoryService.createCategory(dataCategory.name, dataCategory.isActive)
        return res.status(createCategoryState.status).json(createCategoryState)
    },
    getAllCategory: async (req, res) => {

    },
    getUpdateCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const data = await categoryService.getCategoryUpdate(categoryId);
            res.status(data.status).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateCategory: async (req, res) => {
        try {
            const categoryId = req.body.id == undefined ? '' : req.body.id;
            const categoryName = req.body.name == undefined ? '' : req.body.name;
            const data = await categoryService.updateCategory(categoryId, categoryName);
            res.status(data.status).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCategoryAndMeme: async (req, res) => {


    },
}

export default categoryController;