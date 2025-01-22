const Company = require('../models/Company.model');
const createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getCompany = async (req, res) => {
    try {
        const company = await Company.find();
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getCompanyById = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await Company.findById(id);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getCompanyByName = async (req, res) => {
    try {
        const { name } = req.params;
        const query = { name: { $regex: `^${name}$`, $options: 'i' } };

        const company = await Company.find(query);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await Company.findByIdAndUpdate(id, req.body)
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        const updatedCompany= await Company.findById(id)
        res.status(200).json(updatedCompany);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await Company.findByIdAndDelete(id)
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json({ message: "Company deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    createCompany,
    getCompany,
    getCompanyById,
    getCompanyByName,
    updateCompany,
    deleteCompany
}
