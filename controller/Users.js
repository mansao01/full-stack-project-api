import UserModel from "../model/UserModel.js";
import Users from "../model/UserModel.js";

export const getProfiles = async (req, res) => {
    try {
        const response = await UserModel.findAll()
        res.status(200).json({
            msg: "Success",
            data: response
        })
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const postProfile = async (req, res) => {
    const {name, age, address} = req.body
    try {
        await UserModel.create({
            name: name,
            age: age,
            address: address
        })
        res.status(200).json({msg: "Data created"})
    } catch (e) {
        res.status(400).json({msg: "Something is wrong"})
    }
}

export const deleteProfile = async (req, res) => {
    const user = await Users.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!user) return res.status(404).json({msg: "user not found"})
    try {
        await UserModel.destroy({
            where: {
                id: user.id
            }
        })
        res.status(200).json({msg: "Profile deleted"})
    } catch (e) {
        res.status(400).json({msg: e.message})
    }

}

export const updateProfile = async (req, res) => {
    const user = await UserModel.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!user) return res.status(400).json({
        msg: "Profile not found"
    })
    const {name, age, address} = req.body

    try {
        await UserModel.update({
            name: name,
            age: age,
            address: address,
        }, {
            where: {
                id: user.id
            }
        })
        res.status(200).json({msg: "Updated"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

}