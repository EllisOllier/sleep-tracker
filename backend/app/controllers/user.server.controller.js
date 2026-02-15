const Joi = require("joi");

const login = (req, res) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(25).pattern(/[A-Z]/, 'uppercase').pattern(/[a-z]/, 'lowercase').pattern(/[^A-Za-z0-9]/, 'special').pattern(/\d/).required()
    }).unknown(false);
    const { error } = loginSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error_message: error.details[0].message });
    }
}

const signUp = (req, res) => {
    const signUpSchema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(25).pattern(/[A-Z]/, 'uppercase').pattern(/[a-z]/, 'lowercase').pattern(/[^A-Za-z0-9]/, 'special').pattern(/\d/).required()
    }).unknown(false);
    const { error } = signUpSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error_message: error.details[0].message })
    }
}

const logout = (req, res) => {

}

const getProfile = (req, res) => {

}

const updateProfile = (req, res) => {
    const updateProfileSchema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(25).pattern(/[A-Z]/, 'uppercase').pattern(/[a-z]/, 'lowercase').pattern(/[^A-Za-z0-9]/, 'special').pattern(/\d/).required()
    }).unknown(false);

    const { error } = updateProfileSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error_message: error.details[0].message });
    }
}

module.exports = {
    login,
    signUp,
    logout,
    getProfile,
    updateProfile
}